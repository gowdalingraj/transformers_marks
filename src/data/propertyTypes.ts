import type { ComponentType } from "react";
import { BuildingIcon, HomeIcon, MapPinIcon } from "../components/icons";
import type { PropertyType } from "../types/property";

export type PropertyTypeOption = {
  title: string;
  value: PropertyType;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export const propertyTypes: PropertyTypeOption[] = [
  {
    title: "Apartments",
    value: "apartments",
    description: "Modern living spaces in prime locations",
    icon: BuildingIcon
  },
  {
    title: "Villas",
    value: "villas",
    description: "Luxury independent homes with premium amenities",
    icon: HomeIcon
  },
  {
    title: "Plots",
    value: "plots",
    description: "Prime land for your dream construction",
    icon: MapPinIcon
  }
];
