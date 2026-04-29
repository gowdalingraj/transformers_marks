import { useState } from "react";
import type { Property } from "../types/property";
import { BackButton } from "./BackButton";
import { MapPinIcon, RupeeIcon } from "./icons";

type PropertyDetailProps = {
  property: Property;
  onBack: () => void;
  onEnquire: () => void;
};

export function PropertyDetail({ property, onBack, onEnquire }: PropertyDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const images = property.gallery.length > 0 ? property.gallery : [property.image];

  function showPreviousImage() {
    setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNextImage() {
    setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <main className="property-detail-page relative z-10 flex-1 px-6 pb-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <BackButton label="Back to properties" onClick={onBack} />

        <section className="property-hero">
          <div>
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold capitalize text-primary-foreground">
              {property.type}
            </span>
            <h1 className="property-hero-title">{property.name}</h1>
            <div className="property-hero-meta">
              <span>
                <MapPinIcon className="h-4 w-4 text-primary" />
                {property.location}
              </span>
              <span>
                <RupeeIcon className="h-4 w-4 text-primary" />
                {property.price}
              </span>
            </div>
          </div>
          <button className="property-hero-cta" type="button" onClick={onEnquire}>
            Enquire Now
          </button>
        </section>

        <section className="property-gallery">
          <div className="property-slider overflow-hidden rounded-2xl border border-border bg-secondary">
            <img
              src={images[activeImage]}
              alt={`${property.name} image ${activeImage + 1}`}
              className="property-detail-image"
            />
            {images.length > 1 && (
              <>
                <button
                  className="property-slider-button property-slider-button-left"
                  type="button"
                  aria-label="Previous image"
                  onClick={showPreviousImage}
                >
                  &lt;
                </button>
                <button
                  className="property-slider-button property-slider-button-right"
                  type="button"
                  aria-label="Next image"
                  onClick={showNextImage}
                >
                  &gt;
                </button>
                <div className="property-slider-dots" aria-label="Image selector">
                  {images.map((image, index) => (
                    <button
                      className={`property-slider-dot ${
                        activeImage === index ? "property-slider-dot-active" : ""
                      }`}
                      key={image}
                      type="button"
                      aria-label={`Show image ${index + 1}`}
                      onClick={() => setActiveImage(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="property-gallery-thumbs">
            {images.map((image, index) => (
              <button
                className={`property-thumb ${activeImage === index ? "property-thumb-active" : ""}`}
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`${property.name} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </section>

        <section className="property-section property-about-grid">
          <div>
            <p className="property-kicker">About Project</p>
            <h2 className="property-section-title">{property.aboutTitle}</h2>
          </div>
          <div>
            <p className="property-copy">
              {property.aboutText}
            </p>
            <button className="property-outline-button" type="button" onClick={onEnquire}>
              Contact Us
            </button>
          </div>
        </section>

        <section className="property-facts">
          {property.facts.map((fact) => (
            <article className="property-fact" key={fact}>
              <h3>{fact}</h3>
            </article>
          ))}
        </section>

        <section className="property-section">
          <p className="property-kicker">Amenities</p>
          <h2 className="property-section-title">Designed For Everyday Living</h2>
          <div className="property-amenities">
            {property.amenities.map((amenity) => (
              <article className="property-amenity" key={amenity}>
                <span />
                <h3>{amenity}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="property-section property-plan-grid">
          <div>
            <p className="property-kicker">Master Plan</p>
            <h2 className="property-section-title">Ground + Terrace Level Amenities</h2>
            <div className="property-plan-card">
              <h3>Ground Floor</h3>
              <p>{property.masterPlan}</p>
            </div>
          </div>
          <div className="property-plan-card property-plan-card-offset">
            <h3>Terrace</h3>
            <p>{property.terracePlan}</p>
          </div>
        </section>

        <section className="property-section">
          <p className="property-kicker">Floor Plan</p>
          <h2 className="property-section-title">Available Units</h2>
          <div className="property-units">
            {property.units.map((unit) => (
              <article className="property-unit" key={unit.unit}>
                <div>
                  <h3>{unit.unit}</h3>
                  <p>{unit.size}</p>
                </div>
                <div>
                  <span>{unit.bhk}</span>
                  <span>{unit.facing}</span>
                </div>
                <button type="button" onClick={onEnquire}>
                  Enquire
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
