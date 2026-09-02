import type { Property } from "../types/property";

const galleryImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1580587771525-78b9dbd3c236?w=1200&h=800&fit=crop"
];

const planImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop"
];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function makeGallery(image: string, index: number) {
  const primaryImage = image.replace("w=600&h=400", "w=1200&h=800");
  const alternateImages = galleryImages.filter((galleryImage) => galleryImage !== primaryImage);

  return [
    primaryImage,
    alternateImages[index % alternateImages.length],
    alternateImages[(index + 2) % alternateImages.length]
  ];
}

const defaultFacts = [
  "BMRDA Approved",
  "Basement + 5 Floors",
  "RERA Approved",
  "Master + Floor Plans",
  "28 Premium Units",
  "75% Open Space"
];

const defaultAmenities = [
  "Swimming Pool",
  "Amphi-Theatre",
  "Indoor / Outdoor Gym",
  "Party Hall",
  "Work Station",
  "Skating Rink"
];

const defaultAmenityImages = galleryImages.slice(0, defaultAmenities.length);

const defaultUnits = [
  {
    unit: "406 - 3 BHK East Facing",
    text: "1044 sq ft premium residence with efficient planning and east-facing natural light.",
    image: planImages[0]
  },
  {
    unit: "405 - 3 BHK West Facing",
    text: "1042 sq ft home planned for generous living, dining and bedroom spaces.",
    image: planImages[1]
  },
  {
    unit: "403 - 2 BHK East Facing",
    text: "996 sq ft two-bedroom layout with practical circulation and balanced room sizes.",
    image: planImages[2]
  },
  {
    unit: "402 - 2 BHK West Facing",
    text: "952 sq ft compact residence designed for comfortable daily living.",
    image: planImages[0]
  },
  {
    unit: "401 - 2 BHK East Facing",
    text: "838 sq ft east-facing home with optimized spaces for modern apartment living.",
    image: planImages[1]
  },
  {
    unit: "306 - 2 BHK West Facing",
    text: "996 sq ft two-bedroom unit with well-separated private and common zones.",
    image: planImages[2]
  }
];

const baseProperties: Omit<
  Property,
  | "slug"
  | "gallery"
  | "aboutTitle"
  | "aboutText"
  | "brochureUrl"
  | "facts"
  | "amenities"
  | "amenityImages"
  | "masterPlanTitle"
  | "masterPlanImage"
  | "masterPlan"
  | "floorPlanTitle"
  | "floorPlanImage"
  | "floorPlanImages"
  | "floorPlan"
  | "units"
>[] = [
  {
    name: "Prestige Lakeside Habitat",
    type: "apartments",
    location: "Whitefield",
    locationId: "whitefield",
    price: "1.2Cr - 2.5Cr",
    budget: "1cr-2cr",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"
  },
  {
    name: "Brigade El Dorado",
    type: "apartments",
    location: "Electronic City",
    locationId: "electronic-city",
    price: "65L - 95L",
    budget: "50l-1cr",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
  },
  {
    name: "Sobha Dream Acres",
    type: "apartments",
    location: "Sarjapur Road",
    locationId: "sarjapur-road",
    price: "80L - 1.4Cr",
    budget: "50l-1cr",
    image:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop"
  },
  {
    name: "Total Environment Windmills",
    type: "villas",
    location: "Whitefield",
    locationId: "whitefield",
    price: "3.5Cr - 5Cr",
    budget: "2cr-5cr",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop"
  },
  {
    name: "Godrej Splendour",
    type: "apartments",
    location: "Electronic City",
    locationId: "electronic-city",
    price: "1Cr - 1.8Cr",
    budget: "1cr-2cr",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&h=400&fit=crop"
  },
  {
    name: "Mantri Courtyard",
    type: "villas",
    location: "Hebbal",
    locationId: "hebbal",
    price: "2.8Cr - 4.5Cr",
    budget: "2cr-5cr",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
  },
  {
    name: "NBR Green Valley",
    type: "plots",
    location: "Sarjapur Road",
    locationId: "sarjapur-road",
    price: "55L - 90L",
    budget: "50l-1cr",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
  },
  {
    name: "Puravankara Zenium",
    type: "apartments",
    location: "Koramangala",
    locationId: "koramangala",
    price: "1.5Cr - 2.8Cr",
    budget: "1cr-2cr",
    image:
      "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&h=400&fit=crop"
  },
  {
    name: "Embassy Springs",
    type: "plots",
    location: "Hebbal",
    locationId: "hebbal",
    price: "1.2Cr - 2Cr",
    budget: "1cr-2cr",
    image:
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&h=400&fit=crop"
  },
  {
    name: "Phoenix Kessaku",
    type: "villas",
    location: "Koramangala",
    locationId: "koramangala",
    price: "6Cr - 12Cr",
    budget: "5cr+",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
  },
  {
    name: "Adarsh Palm Retreat",
    type: "villas",
    location: "Sarjapur Road",
    locationId: "sarjapur-road",
    price: "3Cr - 5.5Cr",
    budget: "2cr-5cr",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dbd3c236?w=600&h=400&fit=crop"
  },
  {
    name: "Salarpuria Greenage",
    type: "apartments",
    location: "Whitefield",
    locationId: "whitefield",
    price: "1.8Cr - 3.2Cr",
    budget: "1cr-2cr",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
  }
];

export const properties: Property[] = baseProperties.map((property, index) => ({
  ...property,
  slug: slugify(property.name),
  gallery: makeGallery(property.image, index),
  aboutTitle: "2 & 3 BHK Premium Residences",
  aboutText: `At ${property.name}, residents will find inspiration in architectural design, landscaped open spaces, planned amenities and thoughtful community areas. Located in ${property.location}, the project gives convenient access to growing residential, commercial, education and healthcare destinations.`,
  brochureUrl: "",
  facts: defaultFacts,
  amenities: defaultAmenities,
  amenityImages: defaultAmenityImages,
  masterPlanTitle: "Master Plan",
  masterPlanImage: planImages[index % planImages.length],
  masterPlan: "Arrival court, parking, access lobby and landscaped community zones.",
  floorPlanTitle: "Floor Plans",
  floorPlanImage: planImages[(index + 1) % planImages.length],
  floorPlanImages: [planImages[(index + 1) % planImages.length]],
  floorPlan: "Typical floor layouts with efficient circulation, natural light and well-planned homes.",
  units: defaultUnits
}));

export function normalizeProperty(property: Property | Record<string, unknown>): Property {
  const legacy = property as Omit<Property, "units"> & {
    terracePlan?: string;
    masterPlanTitle?: string;
    masterPlanImage?: string;
    floorPlanTitle?: string;
    floorPlanImage?: string;
    floorPlanImages?: string[];
    floorPlan?: string;
    brochureUrl?: string;
    amenityImages?: string[];
    units?: Array<{
      unit?: string;
      size?: string;
      bhk?: string;
      facing?: string;
      text?: string;
      image?: string;
    }>;
  };

  const floorPlanImages = Array.isArray(legacy.floorPlanImages)
    ? legacy.floorPlanImages.filter((image): image is string => Boolean(image))
    : legacy.floorPlanImage
      ? [legacy.floorPlanImage]
      : [planImages[1]];

  return {
    ...(legacy as Property),
    brochureUrl: legacy.brochureUrl || "",
    amenityImages: Array.isArray(legacy.amenityImages)
      ? legacy.amenityImages
      : (legacy.amenities ?? []).map(() => ""),
    masterPlanTitle: legacy.masterPlanTitle || "Master Plan",
    masterPlanImage: legacy.masterPlanImage || planImages[0],
    floorPlanTitle: legacy.floorPlanTitle || "Floor Plans",
    floorPlanImage: floorPlanImages[0] || "",
    floorPlanImages,
    floorPlan: legacy.floorPlan || legacy.terracePlan || "",
    units: (legacy.units ?? []).map((unit, index) => ({
      unit: unit.unit || `Unit ${index + 1}`,
      text:
        unit.text ||
        [unit.size, unit.bhk, unit.facing].filter(Boolean).join(" | ") ||
        "Unit details will be updated soon.",
      image: unit.image || planImages[index % planImages.length]
    }))
  };
}

export function normalizeProperties(nextProperties: Array<Property | Record<string, unknown>>) {
  return nextProperties.map(normalizeProperty);
}

export function getPropertyBySlug(slug: string | null) {
  if (!slug) {
    return null;
  }

  return properties.find((property) => property.slug === slug) ?? null;
}
