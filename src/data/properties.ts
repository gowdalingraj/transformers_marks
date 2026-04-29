import type { Property } from "../types/property";

const galleryImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1580587771525-78b9dbd3c236?w=1200&h=800&fit=crop"
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
  "Ground + Terrace Amenities",
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

const defaultUnits = [
  { unit: "406", size: "1044 sq ft", bhk: "3 BHK", facing: "East Facing" },
  { unit: "405", size: "1042 sq ft", bhk: "3 BHK", facing: "West Facing" },
  { unit: "403", size: "996 sq ft", bhk: "2 BHK", facing: "East Facing" },
  { unit: "402", size: "952 sq ft", bhk: "2 BHK", facing: "West Facing" },
  { unit: "401", size: "838 sq ft", bhk: "2 BHK", facing: "East Facing" },
  { unit: "306", size: "996 sq ft", bhk: "2 BHK", facing: "West Facing" }
];

const baseProperties: Omit<
  Property,
  | "slug"
  | "gallery"
  | "aboutTitle"
  | "aboutText"
  | "facts"
  | "amenities"
  | "masterPlan"
  | "terracePlan"
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
  facts: defaultFacts,
  amenities: defaultAmenities,
  masterPlan: "Arrival court, parking, access lobby and landscaped community zones.",
  terracePlan: "Open-air seating, recreation pockets and leisure areas for residents.",
  units: defaultUnits
}));

export function getPropertyBySlug(slug: string | null) {
  if (!slug) {
    return null;
  }

  return properties.find((property) => property.slug === slug) ?? null;
}
