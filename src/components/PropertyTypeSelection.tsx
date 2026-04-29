import { propertyTypes } from "../data/propertyTypes";
import type { PropertyType } from "../types/property";

type PropertyTypeSelectionProps = {
  selectedType: PropertyType | null;
  onSelect: (type: PropertyType) => void;
};

export function PropertyTypeSelection({ selectedType, onSelect }: PropertyTypeSelectionProps) {
  return (
    <section className="text-center" aria-labelledby="property-type-title">
      <h2 id="property-type-title" className="text-3xl md:text-4xl font-heading mb-3">
        What are you looking for?
      </h2>
      <p className="text-muted-foreground mb-10">Select your preferred property type</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {propertyTypes.map(({ title, value, description, icon: Icon }) => (
          <button
            className={`selection-card ${selectedType === value ? "active" : ""}`}
            key={value}
            type="button"
            aria-pressed={selectedType === value}
            onClick={() => onSelect(value)}
          >
            <div className="icon-circle">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
