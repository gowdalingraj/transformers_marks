import { list, put } from "@vercel/blob";
import { defaultProperties } from "./seed-data.js";

const PROPERTIES_PREFIX = "site-data/properties-";

async function getLatestPropertiesBlob() {
  const { blobs } = await list({ prefix: PROPERTIES_PREFIX, limit: 1000 });

  return blobs.sort(
    (left, right) => right.uploadedAt.getTime() - left.uploadedAt.getTime()
  )[0];
}

export async function getProperties() {
  const latestBlob = await getLatestPropertiesBlob();

  if (!latestBlob) {
    return defaultProperties;
  }

  const response = await fetch(latestBlob.url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Could not read properties JSON (${response.status}).`);
  }

  const properties = await response.json();

  if (!Array.isArray(properties)) {
    throw new Error("Stored properties JSON is not an array.");
  }

  return properties;
}

export async function replaceProperties(properties) {
  if (!Array.isArray(properties)) {
    throw new TypeError("Expected an array of properties.");
  }

  await put(
    `${PROPERTIES_PREFIX}${Date.now()}.json`,
    JSON.stringify(properties),
    {
      access: "public",
      addRandomSuffix: true,
      contentType: "application/json",
      cacheControlMaxAge: 60
    }
  );
}
