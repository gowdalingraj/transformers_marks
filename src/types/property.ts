export type PropertyType = "apartments" | "villas" | "plots";
export type LocationId =
  | "whitefield"
  | "electronic-city"
  | "sarjapur-road"
  | "hebbal"
  | "koramangala";
export type BudgetId = "50l-1cr" | "1cr-2cr" | "2cr-5cr" | "5cr+";

export type Property = {
  slug: string;
  name: string;
  type: PropertyType;
  location: string;
  locationId: LocationId;
  price: string;
  budget: BudgetId;
  image: string;
  gallery: string[];
  aboutTitle: string;
  aboutText: string;
  facts: string[];
  amenities: string[];
  masterPlan: string;
  terracePlan: string;
  units: PropertyUnit[];
};

export type PropertyUnit = {
  unit: string;
  size: string;
  bhk: string;
  facing: string;
};
