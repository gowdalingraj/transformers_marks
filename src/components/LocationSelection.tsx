import { locations } from "../data/locations";
import type { LocationId, PropertyType } from "../types/property";
import { MapPinIcon } from "./icons";

type LocationSelectionProps = {
  selectedType: PropertyType | null;
  selectedLocation: LocationId | null;
  onSelect: (location: LocationId) => void;
};

export function LocationSelection({
  selectedType,
  selectedLocation,
  onSelect
}: LocationSelectionProps) {
  return (
    <section className="text-center" aria-labelledby="location-title">
      <h2 id="location-title" className="text-3xl md:text-4xl font-heading mb-3">
        Where in Bangalore?
      </h2>
      <p className="text-muted-foreground mb-8">Choose your preferred location</p>
      {selectedType && (
        <div className="flex justify-center mb-8">
          <span className="px-4 py-2 border border-primary rounded-full text-sm text-primary capitalize">
            {selectedType}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-4">
        {locations.slice(0, 4).map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            active={selectedLocation === location.id}
            onClick={() => onSelect(location.id)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <LocationCard
          location={locations[4]}
          active={selectedLocation === locations[4].id}
          className="w-full sm:w-auto sm:min-w-[200px]"
          onClick={() => onSelect(locations[4].id)}
        />
      </div>
    </section>
  );
}

function LocationCard({
  location,
  active,
  className = "",
  onClick
}: {
  location: (typeof locations)[number];
  active: boolean;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`selection-card ${className} ${active ? "active" : ""}`}
      type="button"
      aria-pressed={active}
      onClick={onClick}
    >
      <div className="icon-circle">
        <MapPinIcon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-base font-medium mb-1">{location.title}</h3>
      <p className="text-sm text-muted-foreground">{location.subtitle}</p>
    </button>
  );
}
