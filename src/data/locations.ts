import type { LocationId } from "../types/property";

export type LocationOption = {
  id: LocationId;
  title: string;
  subtitle: string;
};

export const locations: LocationOption[] = [
  { id: "whitefield", title: "Whitefield", subtitle: "East Bangalore" },
  { id: "electronic-city", title: "Electronic City", subtitle: "South Bangalore" },
  { id: "sarjapur-road", title: "Sarjapur Road", subtitle: "Southeast" },
  { id: "hebbal", title: "Hebbal", subtitle: "North Bangalore" },
  { id: "koramangala", title: "Koramangala", subtitle: "Central" }
];

export function getLocationTitle(id: LocationId | null) {
  return locations.find((location) => location.id === id)?.title ?? "";
}
