import { pool } from "./db.js";

let contentColumnsPromise;

function ensureContentColumns() {
  contentColumnsPromise ??= Promise.all([
    pool.query(
      "ALTER TABLE properties ADD COLUMN IF NOT EXISTS floor_plan_images JSONB NOT NULL DEFAULT '[]'::jsonb"
    ),
    pool.query(
      "ALTER TABLE properties ADD COLUMN IF NOT EXISTS brochure_url TEXT NOT NULL DEFAULT ''"
    ),
    pool.query(
      "ALTER TABLE properties ADD COLUMN IF NOT EXISTS amenity_images JSONB NOT NULL DEFAULT '[]'::jsonb"
    )
  ]);

  return contentColumnsPromise;
}

export function rowToProperty(row) {
  return {
    slug: row.slug,
    name: row.name,
    type: row.type,
    location: row.location,
    locationId: row.location_id,
    price: row.price,
    budget: row.budget,
    image: row.image,
    gallery: row.gallery,
    aboutTitle: row.about_title,
    aboutText: row.about_text,
    brochureUrl: row.brochure_url ?? "",
    facts: row.facts,
    amenities: row.amenities,
    amenityImages: row.amenity_images ?? row.amenities.map(() => ""),
    masterPlanTitle: row.master_plan_title ?? "Master Plan",
    masterPlanImage: row.master_plan_image ?? row.image,
    masterPlan: row.master_plan,
    floorPlanTitle: row.floor_plan_title ?? "Floor Plans",
    floorPlanImage: row.floor_plan_images?.[0] ?? row.floor_plan_image ?? row.image,
    floorPlanImages:
      row.floor_plan_images?.length > 0
        ? row.floor_plan_images
        : [row.floor_plan_image || row.image].filter(Boolean),
    floorPlan: row.floor_plan || row.terrace_plan,
    units: row.units
  };
}

export async function getProperties() {
  await ensureContentColumns();
  const result = await pool.query("SELECT * FROM properties ORDER BY sort_order, name");
  return result.rows.map(rowToProperty);
}

export async function replaceProperties(properties) {
  await ensureContentColumns();
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM properties");

    for (const [index, property] of properties.entries()) {
      await client.query(
        `INSERT INTO properties (
          slug, name, type, location, location_id, price, budget, image,
          gallery, about_title, about_text, brochure_url, facts, amenities, amenity_images, master_plan_title,
          master_plan_image, master_plan, floor_plan_title, floor_plan_image,
          floor_plan_images, floor_plan, units, sort_order
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8,
          $9::jsonb, $10, $11, $12, $13::jsonb, $14::jsonb, $15::jsonb, $16,
          $17, $18, $19, $20, $21::jsonb, $22, $23::jsonb, $24
        )`,
        [
          property.slug,
          property.name,
          property.type,
          property.location,
          property.locationId,
          property.price,
          property.budget,
          property.image,
          JSON.stringify(property.gallery),
          property.aboutTitle,
          property.aboutText,
          property.brochureUrl ?? "",
          JSON.stringify(property.facts),
          JSON.stringify(property.amenities),
          JSON.stringify(property.amenityImages ?? []),
          property.masterPlanTitle ?? "Master Plan",
          property.masterPlanImage ?? property.image,
          property.masterPlan,
          property.floorPlanTitle ?? "Floor Plans",
          property.floorPlanImages?.[0] ?? property.floorPlanImage ?? property.image,
          JSON.stringify(
            property.floorPlanImages?.length
              ? property.floorPlanImages
              : [property.floorPlanImage ?? property.image].filter(Boolean)
          ),
          property.floorPlan ?? property.terracePlan ?? "",
          JSON.stringify(property.units),
          index
        ]
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}
