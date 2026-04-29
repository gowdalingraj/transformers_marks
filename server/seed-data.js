const galleryImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1580587771525-78b9dbd3c236?w=1200&h=800&fit=crop"
];

const facts = [
  "BMRDA Approved",
  "Basement + 5 Floors",
  "RERA Approved",
  "Ground + Terrace Amenities",
  "28 Premium Units",
  "75% Open Space"
];

const amenities = [
  "Swimming Pool",
  "Amphi-Theatre",
  "Indoor / Outdoor Gym",
  "Party Hall",
  "Work Station",
  "Skating Rink"
];

const units = [
  { unit: "406", size: "1044 sq ft", bhk: "3 BHK", facing: "East Facing" },
  { unit: "405", size: "1042 sq ft", bhk: "3 BHK", facing: "West Facing" },
  { unit: "403", size: "996 sq ft", bhk: "2 BHK", facing: "East Facing" },
  { unit: "402", size: "952 sq ft", bhk: "2 BHK", facing: "West Facing" },
  { unit: "401", size: "838 sq ft", bhk: "2 BHK", facing: "East Facing" },
  { unit: "306", size: "996 sq ft", bhk: "2 BHK", facing: "West Facing" }
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function makeGallery(image, index) {
  const primaryImage = image.replace("w=600&h=400", "w=1200&h=800");
  const alternateImages = galleryImages.filter((galleryImage) => galleryImage !== primaryImage);

  return [
    primaryImage,
    alternateImages[index % alternateImages.length],
    alternateImages[(index + 2) % alternateImages.length]
  ];
}

const baseProperties = [
  ["Prestige Lakeside Habitat", "apartments", "Whitefield", "whitefield", "1.2Cr - 2.5Cr", "1cr-2cr", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"],
  ["Brigade El Dorado", "apartments", "Electronic City", "electronic-city", "65L - 95L", "50l-1cr", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"],
  ["Sobha Dream Acres", "apartments", "Sarjapur Road", "sarjapur-road", "80L - 1.4Cr", "50l-1cr", "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop"],
  ["Total Environment Windmills", "villas", "Whitefield", "whitefield", "3.5Cr - 5Cr", "2cr-5cr", "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop"],
  ["Godrej Splendour", "apartments", "Electronic City", "electronic-city", "1Cr - 1.8Cr", "1cr-2cr", "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&h=400&fit=crop"],
  ["Mantri Courtyard", "villas", "Hebbal", "hebbal", "2.8Cr - 4.5Cr", "2cr-5cr", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"],
  ["NBR Green Valley", "plots", "Sarjapur Road", "sarjapur-road", "55L - 90L", "50l-1cr", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"],
  ["Puravankara Zenium", "apartments", "Koramangala", "koramangala", "1.5Cr - 2.8Cr", "1cr-2cr", "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&h=400&fit=crop"],
  ["Embassy Springs", "plots", "Hebbal", "hebbal", "1.2Cr - 2Cr", "1cr-2cr", "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&h=400&fit=crop"],
  ["Phoenix Kessaku", "villas", "Koramangala", "koramangala", "6Cr - 12Cr", "5cr+", "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"],
  ["Adarsh Palm Retreat", "villas", "Sarjapur Road", "sarjapur-road", "3Cr - 5.5Cr", "2cr-5cr", "https://images.unsplash.com/photo-1580587771525-78b9dbd3c236?w=600&h=400&fit=crop"],
  ["Salarpuria Greenage", "apartments", "Whitefield", "whitefield", "1.8Cr - 3.2Cr", "1cr-2cr", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"]
];

export const defaultProperties = baseProperties.map(
  ([name, type, location, locationId, price, budget, image], index) => ({
    slug: slugify(name),
    name,
    type,
    location,
    locationId,
    price,
    budget,
    image,
    gallery: makeGallery(image, index),
    aboutTitle: "2 & 3 BHK Premium Residences",
    aboutText: `At ${name}, residents will find inspiration in architectural design, landscaped open spaces, planned amenities and thoughtful community areas. Located in ${location}, the project gives convenient access to growing residential, commercial, education and healthcare destinations.`,
    facts,
    amenities,
    masterPlan: "Arrival court, parking, access lobby and landscaped community zones.",
    terracePlan: "Open-air seating, recreation pockets and leisure areas for residents.",
    units
  })
);
