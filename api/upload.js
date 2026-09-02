import { handleUpload } from "@vercel/blob/client";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const result = await handleUpload({
      request,
      body: request.body,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";
        let suppliedPassword = "";

        try {
          suppliedPassword = JSON.parse(clientPayload ?? "{}").password ?? "";
        } catch {
          suppliedPassword = "";
        }

        if (suppliedPassword !== adminPassword) {
          throw new Error("Unauthorized");
        }

        const isImage = pathname.startsWith("property-images/");
        const isBrochure = pathname.startsWith("property-documents/");

        if (!isImage && !isBrochure) {
          throw new Error("Invalid upload path");
        }

        return {
          allowedContentTypes: isBrochure ? ["application/pdf"] : ["image/*"],
          maximumSizeInBytes: isBrochure ? 15_000_000 : 5_000_000,
          addRandomSuffix: true,
          cacheControlMaxAge: 31_536_000
        };
      },
      onUploadCompleted: async () => {}
    });

    response.status(200).json(result);
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: "Upload failed" });
  }
}
