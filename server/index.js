import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { pool } from "./db.js";
import { defaultProperties } from "./seed-data.js";

dotenv.config();

const app = express();
const port = Number(process.env.API_PORT ?? 4000);
const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";

app.use(cors());
app.use(express.json({ limit: "50mb" }));

function requireAdmin(req, res, next) {
  if (req.header("x-admin-password") !== adminPassword) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  next();
}

function rowToProperty(row) {
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
    facts: row.facts,
    amenities: row.amenities,
    masterPlan: row.master_plan,
    terracePlan: row.terrace_plan,
    units: row.units
  };
}

async function replaceProperties(properties) {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM properties");

    for (const property of properties) {
      await client.query(
        `INSERT INTO properties (
          slug, name, type, location, location_id, price, budget, image,
          gallery, about_title, about_text, facts, amenities, master_plan,
          terrace_plan, units
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8,
          $9::jsonb, $10, $11, $12::jsonb, $13::jsonb, $14,
          $15, $16::jsonb
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
          JSON.stringify(property.units)
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

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/properties", async (_req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM properties ORDER BY sort_order, name");
    res.json(result.rows.map(rowToProperty));
  } catch (error) {
    next(error);
  }
});

app.get("/api/properties/:slug", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM properties WHERE slug = $1", [
      req.params.slug
    ]);

    if (result.rowCount === 0) {
      res.status(404).json({ error: "Property not found" });
      return;
    }

    res.json(rowToProperty(result.rows[0]));
  } catch (error) {
    next(error);
  }
});

app.put("/api/properties", requireAdmin, async (req, res, next) => {
  try {
    if (!Array.isArray(req.body)) {
      res.status(400).json({ error: "Expected an array of properties" });
      return;
    }

    await replaceProperties(req.body);
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.post("/api/properties/reset", requireAdmin, async (_req, res, next) => {
  try {
    await replaceProperties(defaultProperties);
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`API listening on http://127.0.0.1:${port}`);
});
