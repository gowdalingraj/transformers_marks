import { pool } from "../db.js";
import { defaultProperties } from "../seed-data.js";

await pool.query("DELETE FROM properties");

for (const [index, property] of defaultProperties.entries()) {
  await pool.query(
    `INSERT INTO properties (
      slug, name, type, location, location_id, price, budget, image,
      gallery, about_title, about_text, facts, amenities, master_plan,
      terrace_plan, units, sort_order
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8,
      $9::jsonb, $10, $11, $12::jsonb, $13::jsonb, $14,
      $15, $16::jsonb, $17
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
      JSON.stringify(property.facts),
      JSON.stringify(property.amenities),
      property.masterPlan,
      property.terracePlan,
      JSON.stringify(property.units),
      index
    ]
  );
}

await pool.end();

console.log(`Seeded ${defaultProperties.length} properties.`);
