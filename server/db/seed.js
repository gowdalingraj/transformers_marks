import { pool } from "../db.js";
import { defaultProperties } from "../seed-data.js";

await pool.query("DELETE FROM properties");

for (const [index, property] of defaultProperties.entries()) {
  await pool.query(
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
      property.masterPlanTitle,
      property.masterPlanImage,
      property.masterPlan,
      property.floorPlanTitle,
      property.floorPlanImage,
      JSON.stringify(property.floorPlanImages ?? [property.floorPlanImage]),
      property.floorPlan,
      JSON.stringify(property.units),
      index
    ]
  );
}

await pool.end();

console.log(`Seeded ${defaultProperties.length} properties.`);
