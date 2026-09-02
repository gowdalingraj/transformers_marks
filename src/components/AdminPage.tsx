import { useEffect, useMemo, useState } from "react";
import { upload } from "@vercel/blob/client";
import type { ReactNode } from "react";
import type { BudgetId, LocationId, Property, PropertyType, PropertyUnit } from "../types/property";
import { BackButton } from "./BackButton";

type AdminPageProps = {
  isAuthed: boolean;
  properties: Property[];
  onLogin: () => void;
  onLogout: () => void;
  onSave: (properties: Property[]) => Promise<"synced" | "local">;
  onReset: () => Promise<Property[]>;
  onBack: () => void;
};

const propertyTypes: PropertyType[] = ["apartments", "villas", "plots"];
const locationIds: LocationId[] = [
  "whitefield",
  "electronic-city",
  "sarjapur-road",
  "hebbal",
  "koramangala"
];
const budgetIds: BudgetId[] = ["50l-1cr", "1cr-2cr", "2cr-5cr", "5cr+"];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const ADMIN_PASSWORD = "admin123";
const USE_LIVE_STORAGE = import.meta.env.VITE_USE_LIVE_STORAGE
  ? import.meta.env.VITE_USE_LIVE_STORAGE === "true"
  : import.meta.env.PROD;

function cleanLines(lines: string[]) {
  return lines.map((line) => line.trim()).filter(Boolean);
}

function cleanPropertyLines(property: Property): Property {
  const floorPlanImages = cleanLines(property.floorPlanImages);
  const amenities = property.amenities
    .map((name, index) => ({ name: name.trim(), image: property.amenityImages[index]?.trim() ?? "" }))
    .filter((amenity) => amenity.name);

  return {
    ...property,
    gallery: cleanLines(property.gallery),
    facts: cleanLines(property.facts),
    amenities: amenities.map((amenity) => amenity.name),
    amenityImages: amenities.map((amenity) => amenity.image),
    floorPlanImages,
    floorPlanImage: floorPlanImages[0] ?? ""
  };
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const original = String(reader.result);
      const image = new Image();

      image.onload = () => {
        const maxDimension = 1800;
        const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));

        if (scale === 1 && file.size < 350_000) {
          resolve(original);
          return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");

        if (!context) {
          resolve(original);
          return;
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/webp", 0.82));
      };
      image.onerror = () => resolve(original);
      image.src = original;
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function readFileAsRawDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function AdminPage({
  isAuthed,
  properties,
  onLogin,
  onLogout,
  onSave,
  onReset,
  onBack
}: AdminPageProps) {
  const [drafts, setDrafts] = useState<Property[]>(properties);
  const [activeSlug, setActiveSlug] = useState(properties[0]?.slug ?? "");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const activeProperty = useMemo(
    () => drafts.find((property) => property.slug === activeSlug) ?? drafts[0],
    [activeSlug, drafts]
  );

  async function storeImages(files: File[]) {
    if (!USE_LIVE_STORAGE) {
      return Promise.all(files.map((file) => readFileAsDataUrl(file)));
    }

    setSaveStatus(files.length === 1 ? "Uploading image..." : "Uploading images...");

    try {
      const urls = await Promise.all(
        files.map(async (file, index) => {
          const dataUrl = await readFileAsDataUrl(file);
          const imageBlob = await (await fetch(dataUrl)).blob();
          const extension = imageBlob.type.split("/")[1]?.replace("jpeg", "jpg") || "webp";
          const safeName = file.name
            .replace(/\.[^.]+$/, "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || "property-image";
          const result = await upload(
            `property-images/${Date.now()}-${index}-${safeName}.${extension}`,
            imageBlob,
            {
              access: "public",
              handleUploadUrl: "/api/upload",
              clientPayload: JSON.stringify({ password: ADMIN_PASSWORD })
            }
          );

          return result.url;
        })
      );

      setSaveStatus(files.length === 1 ? "Image uploaded." : "Images uploaded.");
      return urls;
    } catch {
      setSaveStatus("Image upload failed. Check that Vercel Blob is connected.");
      return null;
    }
  }

  async function storeBrochure(file: File) {
    if (!USE_LIVE_STORAGE) {
      return readFileAsRawDataUrl(file);
    }

    setSaveStatus("Uploading brochure...");

    try {
      const safeName = file.name
        .replace(/\.pdf$/i, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "property-brochure";
      const result = await upload(`property-documents/${Date.now()}-${safeName}.pdf`, file, {
        access: "public",
        handleUploadUrl: "/api/upload",
        clientPayload: JSON.stringify({ password: ADMIN_PASSWORD })
      });

      setSaveStatus("Brochure uploaded.");
      return result.url;
    } catch {
      setSaveStatus("Brochure upload failed. Upload a PDF smaller than 15 MB.");
      return null;
    }
  }

  function uniqueSlug(value: string, currentSlug?: string) {
    const base = slugify(value) || "property";
    const used = new Set(
      drafts.filter((property) => property.slug !== currentSlug).map((property) => property.slug)
    );
    let candidate = base;
    let suffix = 2;

    while (used.has(candidate)) {
      candidate = `${base}-${suffix}`;
      suffix += 1;
    }

    return candidate;
  }

  useEffect(() => {
    setDrafts(properties);
    setActiveSlug((currentSlug) => {
      if (properties.some((property) => property.slug === currentSlug)) {
        return currentSlug;
      }

      return properties[0]?.slug ?? "";
    });
  }, [properties]);

  function updateProperty(patch: Partial<Property>) {
    if (!activeProperty) {
      return;
    }

    const nextSlug = patch.name ? uniqueSlug(patch.name, activeProperty.slug) : activeProperty.slug;

    setDrafts((current) =>
      current.map((property) =>
        property.slug === activeProperty.slug
          ? {
              ...property,
              ...patch,
              slug: nextSlug
            }
          : property
      )
    );

    if (patch.name) {
      setActiveSlug(nextSlug);
    }
  }

  function updateLines(key: "gallery" | "facts", value: string) {
    updateProperty({
      // Preserve the text exactly while it is being edited. Trimming or removing
      // blank entries here makes a controlled textarea reject spaces and Enter.
      [key]: value.split("\n")
    } as Pick<Property, typeof key>);
  }

  function updateAmenity(index: number, patch: { name?: string; image?: string }) {
    if (!activeProperty) return;

    const amenities = [...activeProperty.amenities];
    const amenityImages = [...activeProperty.amenityImages];
    if (patch.name !== undefined) amenities[index] = patch.name;
    if (patch.image !== undefined) amenityImages[index] = patch.image;
    updateProperty({ amenities, amenityImages });
  }

  function addAmenity() {
    if (!activeProperty) return;
    updateProperty({
      amenities: [...activeProperty.amenities, `Amenity ${activeProperty.amenities.length + 1}`],
      amenityImages: [...activeProperty.amenityImages, ""]
    });
  }

  function removeAmenity(index: number) {
    if (!activeProperty) return;
    updateProperty({
      amenities: activeProperty.amenities.filter((_, itemIndex) => itemIndex !== index),
      amenityImages: activeProperty.amenityImages.filter((_, itemIndex) => itemIndex !== index)
    });
  }

  async function uploadAmenityImage(index: number, file: File | undefined) {
    if (!file) return;
    const images = await storeImages([file]);
    if (images) updateAmenity(index, { image: images[0] });
  }

  async function uploadBrochure(file: File | undefined) {
    if (!file) return;
    const brochureUrl = await storeBrochure(file);
    if (brochureUrl) updateProperty({ brochureUrl });
  }

  function updateUnit(index: number, patch: Partial<PropertyUnit>) {
    if (!activeProperty) {
      return;
    }

    updateProperty({
      units: activeProperty.units.map((unit, unitIndex) =>
        unitIndex === index ? { ...unit, ...patch } : unit
      )
    });
  }

  function addUnit() {
    if (!activeProperty) {
      return;
    }

    updateProperty({
      units: [
        ...activeProperty.units,
        {
          unit: `Unit ${activeProperty.units.length + 1}`,
          text: "Enter the unit size, configuration and facing.",
          image: activeProperty.floorPlanImage || activeProperty.image
        }
      ]
    });
  }

  function removeUnit(index: number) {
    if (!activeProperty) {
      return;
    }

    updateProperty({
      units: activeProperty.units.filter((_, unitIndex) => unitIndex !== index)
    });
  }

  async function uploadUnitImage(index: number, file: File | undefined) {
    if (!file) {
      return;
    }

    const images = await storeImages([file]);
    if (images) {
      updateUnit(index, { image: images[0] });
    }
  }

  async function uploadCardImage(file: File | undefined) {
    if (!file) {
      return;
    }

    const images = await storeImages([file]);
    if (images) {
      updateProperty({ image: images[0] });
    }
  }

  async function uploadGalleryImages(fileList: FileList | null) {
    if (!fileList || fileList.length === 0 || !activeProperty) {
      return;
    }

    const uploadedImages = await storeImages(Array.from(fileList));

    if (uploadedImages) {
      updateProperty({ gallery: [...activeProperty.gallery, ...uploadedImages] });
    }
  }

  function updateFloorPlanImages(images: string[]) {
    updateProperty({
      floorPlanImages: images,
      floorPlanImage: images.find((image) => image.trim()) ?? ""
    });
  }

  async function uploadFloorPlanImages(fileList: FileList | null) {
    if (!fileList || fileList.length === 0 || !activeProperty) {
      return;
    }

    const uploadedImages = await storeImages(Array.from(fileList));

    if (uploadedImages) {
      updateFloorPlanImages([...activeProperty.floorPlanImages, ...uploadedImages]);
    }
  }

  async function uploadPlanImage(file: File | undefined) {
    if (!file) {
      return;
    }

    const images = await storeImages([file]);
    if (images) {
      updateProperty({ masterPlanImage: images[0] });
    }
  }

  function addProperty() {
    const nextNumber = drafts.length + 1;
    const name = `New Property ${nextNumber}`;
    const created: Property = {
      slug: uniqueSlug(name),
      name,
      type: "apartments",
      location: "Whitefield",
      locationId: "whitefield",
      price: "1Cr - 2Cr",
      budget: "1cr-2cr",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop"
      ],
      aboutTitle: "2 & 3 BHK Premium Residences",
      aboutText: "Describe the project, location, design, amenities and connectivity here.",
      brochureUrl: "",
      facts: ["RERA Approved", "Premium Units", "Open Space"],
      amenities: ["Swimming Pool", "Gym", "Party Hall"],
      amenityImages: ["", "", ""],
      masterPlanTitle: "Master Plan",
      masterPlanImage:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
      masterPlan: "Describe the master plan here.",
      floorPlanTitle: "Floor Plans",
      floorPlanImage:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
      floorPlanImages: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop"
      ],
      floorPlan: "Describe floor plans here.",
      units: [
        {
          unit: "101 - 2 BHK",
          text: "1000 sq ft east-facing home with efficient planning.",
          image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop"
        }
      ]
    };

    setDrafts((current) => [...current, created]);
    setActiveSlug(created.slug);
  }

  function removeProperty() {
    if (!activeProperty || drafts.length <= 1) {
      return;
    }

    const nextProperties = drafts.filter((property) => property.slug !== activeProperty.slug);
    setDrafts(nextProperties);
    setActiveSlug(nextProperties[0].slug);
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password === ADMIN_PASSWORD) {
      setPassword("");
      setLoginError("");
      onLogin();
      return;
    }

    setLoginError("Invalid password.");
  }

  if (!isAuthed) {
    return (
      <main className="admin-page relative z-10 flex-1 px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-xl">
          <BackButton label="Back" onClick={onBack} />
          <form className="admin-login" onSubmit={handleLogin}>
            <p className="property-kicker">Private</p>
            <h1 className="property-section-title">Admin Login</h1>
            <label className="admin-field">
              <span>Password</span>
              <input
                autoFocus
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter admin password"
              />
            </label>
            {loginError && <p className="admin-error">{loginError}</p>}
            <button className="admin-login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page relative z-10 flex-1 px-6 pb-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="admin-header">
          <div>
            <p className="property-kicker">Admin</p>
            <h1 className="property-section-title">Edit Site Content</h1>
          </div>
          <div className="admin-actions">
            <button type="button" onClick={onBack}>
              Back
            </button>
            <button type="button" onClick={onLogout}>
              Logout
            </button>
            <button type="button" onClick={addProperty}>
              Add Property
            </button>
            <button type="button" onClick={removeProperty}>
              Remove
            </button>
            <button
              type="button"
              onClick={async () => {
                try {
                  const cleanedDrafts = drafts.map(cleanPropertyLines);
                  const result = await onSave(cleanedDrafts);
                  setDrafts(cleanedDrafts);
                  setSaveStatus(
                    result === "synced"
                      ? "Saved to the live website. Other users can see the changes now."
                      : "Saved on this device only. Check that Vercel Blob is connected."
                  );
                } catch {
                  setSaveStatus("Could not save. This browser's storage may be full.");
                }
              }}
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={async () => {
                const resetDrafts = await onReset();
                setDrafts(resetDrafts);
                setActiveSlug(resetDrafts[0]?.slug ?? "");
                setSaveStatus("Reset complete.");
              }}
            >
              Reset
            </button>
          </div>
        </div>
        {saveStatus && <p className="admin-status">{saveStatus}</p>}

        {activeProperty && (
          <section className="admin-layout">
            <aside className="admin-list">
              {drafts.map((property) => (
                <button
                  className={activeProperty.slug === property.slug ? "active" : ""}
                  key={property.slug}
                  type="button"
                  onClick={() => setActiveSlug(property.slug)}
                >
                  {property.name}
                </button>
              ))}
            </aside>

            <form className="admin-form">
              <AdminField label="Name">
                <input
                  value={activeProperty.name}
                  onChange={(event) => updateProperty({ name: event.target.value })}
                />
              </AdminField>

              <div className="admin-grid">
                <AdminField label="Type">
                  <select
                    value={activeProperty.type}
                    onChange={(event) =>
                      updateProperty({ type: event.target.value as PropertyType })
                    }
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </AdminField>
                <AdminField label="Location Label">
                  <input
                    value={activeProperty.location}
                    onChange={(event) => updateProperty({ location: event.target.value })}
                  />
                </AdminField>
                <AdminField label="Location Filter">
                  <select
                    value={activeProperty.locationId}
                    onChange={(event) =>
                      updateProperty({ locationId: event.target.value as LocationId })
                    }
                  >
                    {locationIds.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </AdminField>
                <AdminField label="Budget Filter">
                  <select
                    value={activeProperty.budget}
                    onChange={(event) =>
                      updateProperty({ budget: event.target.value as BudgetId })
                    }
                  >
                    {budgetIds.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </AdminField>
              </div>

              <AdminField label="Price">
                <input
                  value={activeProperty.price}
                  onChange={(event) => updateProperty({ price: event.target.value })}
                />
              </AdminField>
              <AdminField label="Property card image">
                <p className="admin-help">
                  This image appears on the homepage card. Paste an image URL or upload a file.
                </p>
                <input
                  aria-label="Card image URL"
                  placeholder="https://example.com/property.jpg"
                  value={activeProperty.image}
                  onChange={(event) => updateProperty({ image: event.target.value })}
                />
                <input
                  aria-label="Upload card image"
                  accept="image/*"
                  type="file"
                  onChange={(event) => {
                    void uploadCardImage(event.target.files?.[0]);
                    event.target.value = "";
                  }}
                />
                {activeProperty.image && (
                  <ImagePreview
                    src={activeProperty.image}
                    alt={`${activeProperty.name} card preview`}
                    onRemove={() => updateProperty({ image: "" })}
                  />
                )}
              </AdminField>
              <AdminField label="Gallery URLs, one per line">
                <textarea
                  value={activeProperty.gallery.join("\n")}
                  onChange={(event) => updateLines("gallery", event.target.value)}
                />
              </AdminField>
              <AdminField label="Upload Gallery Images">
                <input
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(event) => {
                    void uploadGalleryImages(event.target.files);
                    event.target.value = "";
                  }}
                />
                <div className="admin-gallery-preview">
                  {activeProperty.gallery.map((image, index) =>
                    image.trim() ? (
                      <ImagePreview
                        key={`${image}-${index}`}
                        src={image}
                        alt={`${activeProperty.name} gallery preview ${index + 1}`}
                        compact
                        onRemove={() =>
                          updateProperty({
                            gallery: activeProperty.gallery.filter(
                              (_, imageIndex) => imageIndex !== index
                            )
                          })
                        }
                      />
                    ) : null
                  )}
                </div>
              </AdminField>
              <AdminField label="About Project">
                <textarea
                  value={activeProperty.aboutText}
                  onChange={(event) => updateProperty({ aboutText: event.target.value })}
                />
              </AdminField>
              <AdminField label="Brochure PDF">
                <p className="admin-help">
                  Upload the PDF used by the Download Brochure button on the property page.
                </p>
                <input
                  accept="application/pdf,.pdf"
                  type="file"
                  onChange={(event) => {
                    void uploadBrochure(event.target.files?.[0]);
                    event.target.value = "";
                  }}
                />
                {activeProperty.brochureUrl && (
                  <div className="admin-document-row">
                    <a href={activeProperty.brochureUrl} target="_blank" rel="noreferrer">
                      View uploaded brochure
                    </a>
                    <button type="button" onClick={() => updateProperty({ brochureUrl: "" })}>
                      Remove
                    </button>
                  </div>
                )}
              </AdminField>
              <AdminField label="Project Essentials, one per line">
                <textarea
                  value={activeProperty.facts.join("\n")}
                  onChange={(event) => updateLines("facts", event.target.value)}
                />
              </AdminField>
              <section className="admin-units" aria-labelledby="admin-amenities-title">
                <div className="admin-units-header">
                  <div>
                    <h2 id="admin-amenities-title">Amenity tiles</h2>
                    <p className="admin-help">Choose a title and image for every amenity tile.</p>
                  </div>
                  <button type="button" onClick={addAmenity}>Add Amenity Tile</button>
                </div>
                <div className="admin-unit-list">
                  {activeProperty.amenities.map((amenity, index) => (
                    <article className="admin-unit-card" key={index}>
                      <div className="admin-unit-card-header">
                        <strong>Amenity tile {index + 1}</strong>
                        <button type="button" onClick={() => removeAmenity(index)}>Remove</button>
                      </div>
                      <AdminField label="Amenity title">
                        <input
                          value={amenity}
                          onChange={(event) => updateAmenity(index, { name: event.target.value })}
                        />
                      </AdminField>
                      <AdminField label="Amenity image">
                        <input
                          aria-label={`Amenity ${index + 1} image URL`}
                          placeholder="https://example.com/amenity.jpg"
                          value={activeProperty.amenityImages[index] ?? ""}
                          onChange={(event) => updateAmenity(index, { image: event.target.value })}
                        />
                        <input
                          aria-label={`Upload amenity ${index + 1} image`}
                          accept="image/*"
                          type="file"
                          onChange={(event) => {
                            void uploadAmenityImage(index, event.target.files?.[0]);
                            event.target.value = "";
                          }}
                        />
                        {activeProperty.amenityImages[index] && (
                          <ImagePreview
                            src={activeProperty.amenityImages[index]}
                            alt={`${amenity || `Amenity ${index + 1}`} preview`}
                            onRemove={() => updateAmenity(index, { image: "" })}
                          />
                        )}
                      </AdminField>
                    </article>
                  ))}
                </div>
              </section>
              <AdminField label="Master Plan Title">
                <input
                  value={activeProperty.masterPlanTitle}
                  onChange={(event) => updateProperty({ masterPlanTitle: event.target.value })}
                />
              </AdminField>
              <AdminField label="Master Plan Image URL">
                <input
                  value={activeProperty.masterPlanImage}
                  onChange={(event) => updateProperty({ masterPlanImage: event.target.value })}
                />
              </AdminField>
              <AdminField label="Upload Master Plan Image">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(event) => {
                    void uploadPlanImage(event.target.files?.[0]);
                    event.target.value = "";
                  }}
                />
                {activeProperty.masterPlanImage && (
                  <ImagePreview
                    src={activeProperty.masterPlanImage}
                    alt={`${activeProperty.name} master plan preview`}
                    onRemove={() => updateProperty({ masterPlanImage: "" })}
                  />
                )}
              </AdminField>
              <AdminField label="Master Plan Text">
                <textarea
                  value={activeProperty.masterPlan}
                  onChange={(event) => updateProperty({ masterPlan: event.target.value })}
                />
              </AdminField>
              <AdminField label="Floor Plan Title">
                <input
                  value={activeProperty.floorPlanTitle}
                  onChange={(event) => updateProperty({ floorPlanTitle: event.target.value })}
                />
              </AdminField>
              <AdminField label="Floor Plan Image URLs, one per line">
                <textarea
                  value={activeProperty.floorPlanImages.join("\n")}
                  onChange={(event) =>
                    updateFloorPlanImages(event.target.value.split("\n"))
                  }
                />
              </AdminField>
              <AdminField label="Upload Floor Plan Images">
                <p className="admin-help">Select one or more images. New images are added to the list.</p>
                <input
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(event) => {
                    void uploadFloorPlanImages(event.target.files);
                    event.target.value = "";
                  }}
                />
                <div className="admin-gallery-preview">
                  {activeProperty.floorPlanImages.map((image, index) =>
                    image.trim() ? (
                      <ImagePreview
                        key={`${image}-${index}`}
                        src={image}
                        alt={`${activeProperty.name} floor plan preview ${index + 1}`}
                        compact
                        onRemove={() =>
                          updateFloorPlanImages(
                            activeProperty.floorPlanImages.filter(
                              (_, imageIndex) => imageIndex !== index
                            )
                          )
                        }
                      />
                    ) : null
                  )}
                </div>
              </AdminField>
              <AdminField label="Floor Plan Text">
                <textarea
                  value={activeProperty.floorPlan}
                  onChange={(event) => updateProperty({ floorPlan: event.target.value })}
                />
              </AdminField>
              <section className="admin-units" aria-labelledby="admin-units-title">
                <div className="admin-units-header">
                  <div>
                    <h2 id="admin-units-title">Unit tiles</h2>
                    <p className="admin-help">
                      Add one tile per unit. Each tile can use its own uploaded image or image URL.
                    </p>
                  </div>
                  <button type="button" onClick={addUnit}>
                    Add Unit Tile
                  </button>
                </div>
                {activeProperty.units.length === 0 && (
                  <p className="admin-empty">No unit tiles yet. Select “Add Unit Tile” to create one.</p>
                )}
                <div className="admin-unit-list">
                  {activeProperty.units.map((unit, index) => (
                    <article className="admin-unit-card" key={index}>
                      <div className="admin-unit-card-header">
                        <strong>Unit tile {index + 1}</strong>
                        <button type="button" onClick={() => removeUnit(index)}>
                          Remove
                        </button>
                      </div>
                      <AdminField label="Unit title">
                        <input
                          value={unit.unit}
                          onChange={(event) => updateUnit(index, { unit: event.target.value })}
                        />
                      </AdminField>
                      <AdminField label="Unit details">
                        <textarea
                          value={unit.text}
                          onChange={(event) => updateUnit(index, { text: event.target.value })}
                        />
                      </AdminField>
                      <AdminField label="Unit image">
                        <input
                          aria-label={`Unit ${index + 1} image URL`}
                          placeholder="https://example.com/floor-plan.jpg"
                          value={unit.image}
                          onChange={(event) => updateUnit(index, { image: event.target.value })}
                        />
                        <input
                          aria-label={`Upload unit ${index + 1} image`}
                          accept="image/*"
                          type="file"
                          onChange={(event) => {
                            void uploadUnitImage(index, event.target.files?.[0]);
                            event.target.value = "";
                          }}
                        />
                        {unit.image && (
                          <ImagePreview
                            src={unit.image}
                            alt={`${unit.unit || `Unit ${index + 1}`} preview`}
                            onRemove={() => updateUnit(index, { image: "" })}
                          />
                        )}
                      </AdminField>
                    </article>
                  ))}
                </div>
              </section>
            </form>
          </section>
        )}
      </div>
    </main>
  );
}

function AdminField({
  label,
  children
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function ImagePreview({
  src,
  alt,
  onRemove,
  compact = false
}: {
  src: string;
  alt: string;
  onRemove: () => void;
  compact?: boolean;
}) {
  return (
    <div className={`admin-image-preview-wrap ${compact ? "admin-image-preview-compact" : ""}`}>
      <img className="admin-image-preview" src={src} alt={alt} />
      <button
        className="admin-image-remove"
        type="button"
        aria-label={`Remove ${alt}`}
        title="Remove image"
        onClick={onRemove}
      >
        ×
      </button>
    </div>
  );
}
