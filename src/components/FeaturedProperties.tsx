import type { BudgetId, LocationId, Property, PropertyType } from "../types/property";
import { PropertyCard } from "./PropertyCard";

type FeaturedPropertiesProps = {
  properties: Property[];
  selectedType: PropertyType | null;
  selectedLocation: LocationId | null;
  selectedBudget: BudgetId | null;
  onSelectProperty: (property: Property) => void;
};

export function FeaturedProperties({
  properties,
  selectedType,
  selectedLocation,
  selectedBudget,
  onSelectProperty
}: FeaturedPropertiesProps) {
  const hasFilters = Boolean(selectedType || selectedLocation || selectedBudget);

  return (
    <section id="properties" className="relative z-10 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading text-center mb-2">
          {hasFilters ? "Matching Properties" : "Featured Properties"}
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-sm">
          {properties.length} {properties.length === 1 ? "property" : "properties"} found
        </p>
        {properties.length > 0 ? (
          <div className="property-scroll" role="region" aria-label="Properties — scroll horizontally to browse" tabIndex={0}>
            {properties.map((property) => (
              <PropertyCard
                key={property.name}
                property={property}
                onClick={() => onSelectProperty(property)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">
            No properties match your current filters.
          </p>
        )}
      </div>
    </section>
  );
}
