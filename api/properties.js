import { getProperties, replaceProperties } from "../server/blob-property-store.js";

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  try {
    if (request.method === "GET") {
      response.status(200).json(await getProperties());
      return;
    }

    if (request.method === "PUT") {
      const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";

      if (request.headers["x-admin-password"] !== adminPassword) {
        response.status(401).json({ error: "Unauthorized" });
        return;
      }

      if (!Array.isArray(request.body)) {
        response.status(400).json({ error: "Expected an array of properties" });
        return;
      }

      await replaceProperties(request.body);
      response.status(200).json({ ok: true });
      return;
    }

    response.setHeader("Allow", "GET, PUT");
    response.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
}
