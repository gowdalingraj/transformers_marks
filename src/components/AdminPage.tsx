import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { BudgetId, LocationId, Property, PropertyType, PropertyUnit } from "../types/property";
import { BackButton } from "./BackButton";

type AdminPageProps = {
  isAuthed: boolean;
  properties: Property[];
  onLogin: () => void;
  onLogout: () => void;
  onSave: (properties: Property[]) => Promise<void>;
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

function readFileAsDataUrl(file: File) {
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

    setDrafts((current) =>
      current.map((property) =>
        property.slug === activeProperty.slug
          ? {
              ...property,
              ...patch,
              slug: patch.name ? slugify(patch.name) : property.slug
            }
          : property
      )
    );

    if (patch.name) {
      setActiveSlug(slugify(patch.name));
    }
  }

  function updateLines(key: "gallery" | "facts" | "amenities", value: string) {
    updateProperty({
      [key]: value
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    } as Pick<Property, typeof key>);
  }

  function updateUnits(value: string) {
    const units = value
      .split("\n")
      .map((line) => line.split("|").map((part) => part.trim()))
      .filter((parts) => parts.length >= 4 && parts[0])
      .map<PropertyUnit>(([unit, size, bhk, facing]) => ({ unit, size, bhk, facing }));

    updateProperty({ units });
  }

  async function uploadCardImage(file: File | undefined) {
    if (!file) {
      return;
    }

    updateProperty({ image: await readFileAsDataUrl(file) });
  }

  async function uploadGalleryImages(fileList: FileList | null) {
    if (!fileList || fileList.length === 0 || !activeProperty) {
      return;
    }

    const uploadedImages = await Promise.all(
      Array.from(fileList).map((file) => readFileAsDataUrl(file))
    );

    updateProperty({ gallery: [...activeProperty.gallery, ...uploadedImages] });
  }

  function addProperty() {
    const created: Property = {
      slug: `new-property-${drafts.length + 1}`,
      name: `New Property ${drafts.length + 1}`,
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
      facts: ["RERA Approved", "Premium Units", "Open Space"],
      amenities: ["Swimming Pool", "Gym", "Party Hall"],
      masterPlan: "Describe the master plan here.",
      terracePlan: "Describe terrace amenities here.",
      units: [{ unit: "101", size: "1000 sq ft", bhk: "2 BHK", facing: "East Facing" }]
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
                  await onSave(drafts);
                  setSaveStatus("Saved to database.");
                } catch {
                  setSaveStatus("Could not save to API. Check the API server and database.");
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
              <AdminField label="Card Image URL">
                <input
                  value={activeProperty.image}
                  onChange={(event) => updateProperty({ image: event.target.value })}
                />
              </AdminField>
              <AdminField label="Upload Card Image">
                <input
                  accept="image/*"
                  type="file"
                  onChange={(event) => {
                    void uploadCardImage(event.target.files?.[0]);
                    event.target.value = "";
                  }}
                />
                <img
                  className="admin-image-preview"
                  src={activeProperty.image}
                  alt={`${activeProperty.name} card preview`}
                />
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
                  {activeProperty.gallery.map((image, index) => (
                    <img
                      key={`${image}-${index}`}
                      src={image}
                      alt={`${activeProperty.name} gallery preview ${index + 1}`}
                    />
                  ))}
                </div>
              </AdminField>
              <AdminField label="About Title">
                <input
                  value={activeProperty.aboutTitle}
                  onChange={(event) => updateProperty({ aboutTitle: event.target.value })}
                />
              </AdminField>
              <AdminField label="About Text">
                <textarea
                  value={activeProperty.aboutText}
                  onChange={(event) => updateProperty({ aboutText: event.target.value })}
                />
              </AdminField>
              <AdminField label="Facts, one per line">
                <textarea
                  value={activeProperty.facts.join("\n")}
                  onChange={(event) => updateLines("facts", event.target.value)}
                />
              </AdminField>
              <AdminField label="Amenities, one per line">
                <textarea
                  value={activeProperty.amenities.join("\n")}
                  onChange={(event) => updateLines("amenities", event.target.value)}
                />
              </AdminField>
              <AdminField label="Master Plan Text">
                <textarea
                  value={activeProperty.masterPlan}
                  onChange={(event) => updateProperty({ masterPlan: event.target.value })}
                />
              </AdminField>
              <AdminField label="Terrace Plan Text">
                <textarea
                  value={activeProperty.terracePlan}
                  onChange={(event) => updateProperty({ terracePlan: event.target.value })}
                />
              </AdminField>
              <AdminField label="Units: unit | size | bhk | facing">
                <textarea
                  value={activeProperty.units
                    .map((unit) => `${unit.unit} | ${unit.size} | ${unit.bhk} | ${unit.facing}`)
                    .join("\n")}
                  onChange={(event) => updateUnits(event.target.value)}
                />
              </AdminField>
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
