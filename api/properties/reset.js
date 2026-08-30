import { defaultProperties } from "../../server/seed-data.js";
import { replaceProperties } from "../../server/property-store.js";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";

  if (request.headers["x-admin-password"] !== adminPassword) {
    response.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    await replaceProperties(defaultProperties);
    response.setHeader("Cache-Control", "no-store");
    response.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
}
