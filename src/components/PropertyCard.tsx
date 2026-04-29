import type { Property } from "../types/property";
import { MapPinIcon, RupeeIcon } from "./icons";

type PropertyCardProps = {
  property: Property;
  onClick: () => void;
};

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <article className="bg-secondary border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group focus-within:border-primary">
      <a
        className="property-card-link"
        href={`/properties/${property.slug}`}
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full capitalize">
            {property.type}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-heading text-lg font-medium mb-2 line-clamp-1">
            {property.name}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
            <MapPinIcon className="w-3.5 h-3.5 text-primary" />
            <span>{property.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-primary font-medium text-sm">
            <RupeeIcon className="w-3.5 h-3.5" />
            <span>{property.price}</span>
          </div>
        </div>
      </a>
    </article>
  );
}
