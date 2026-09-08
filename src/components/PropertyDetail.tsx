import { AmenityIcon } from "./AmenityIcon";
import { useEffect, useState } from "react";
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
  const [popupImage, setPopupImage] = useState<{ src: string; alt: string } | null>(null);
  const images = property.gallery.length > 0 ? property.gallery : [property.image];
  const floorPlanImages =
    property.floorPlanImages.length > 0
      ? property.floorPlanImages
      : [property.floorPlanImage].filter(Boolean);

  useEffect(() => {
    if (!popupImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPopupImage(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [popupImage]);

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
          <div className="property-actions">
          {property.brochureUrl ? <a className="property-outline-button" href={property.brochureUrl} download target="_blank" rel="noreferrer">Download Brochure</a> : <button className="property-outline-button" disabled>Brochure unavailable</button>}
          <button className="property-hero-cta" type="button" onClick={onEnquire}>
            Cost Sheet
          </button>
          </div>
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
            <h2 className="property-section-title">About Project</h2>
          </div>
          <div>
            <p className="property-copy">
              {property.aboutText}
            </p>

          </div>
        </section>

        <section className="property-section">
          <p className="property-kicker">Location</p>
          <h2 className="property-section-title">{property.location}</h2>
          <a className="location-map-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${property.name}, ${property.location}, Bangalore`)}`} target="_blank" rel="noreferrer"><MapPinIcon className="h-5 w-5" /><span>Explore the location on Google Maps</span><span aria-hidden="true">&nearr;</span></a>
          {property.locationHighlights?.length ? <><h3>Location Highlights</h3><ul className="location-highlights">{property.locationHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></> : null}
        </section>

        <section className="property-section property-highlights-section">
          <div className="property-section-heading">
            <div>
              <p className="property-kicker">Highlights</p>
              <h2 className="property-section-title">Project Essentials</h2>
            </div>
            <p>
              Key approvals, planning details and community-scale markers at a glance.
            </p>
          </div>
          <ul className="property-highlights-box">
            {property.facts.filter((fact) => fact.trim()).map((fact, index) => (
              <li key={`${index}-${fact}`}>
                <span className="highlight-bullet" aria-hidden="true">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="property-section">
          <div className="property-section-heading">
            <div>
              <p className="property-kicker">Amenities</p>
              <h2 className="property-section-title">Designed For Everyday Living</h2>
            </div>
            <p>
              A balanced mix of wellness, recreation, work and social spaces for residents.
            </p>
          </div>
          <div className="property-amenities">
            {property.amenities.map((amenity, index) => (
              <article className="property-amenity" key={amenity}>
                {property.amenityImages[index] ? (
                  <img src={property.amenityImages[index]} alt="" />
                ) : (
                  <span className="property-amenity-icon">
                    <AmenityIcon name={amenity} />
                  </span>
                )}
                <h3>{property.amenityImages[index] && <AmenityIcon name={amenity} />}{amenity}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="property-section property-plan-grid">
          <div>
            <p className="property-kicker">Master Plan</p>
            <h2 className="property-section-title">{property.masterPlanTitle}</h2>
            <div className="property-plan-card">
              <button
                className="property-popup-trigger"
                type="button"
                onClick={() => setPopupImage({ src: property.masterPlanImage, alt: property.masterPlanTitle })}
              >
                <img src={property.masterPlanImage} alt={property.masterPlanTitle} />
                <span>View larger</span>
              </button>
              <p>{property.masterPlan}</p>
            </div>
          </div>
          <div className="property-plan-card property-plan-card-offset">
            <h3>{property.floorPlanTitle}</h3>
            <p>{property.floorPlan}</p>
            {floorPlanImages.length > 0 ? (
              <div className="property-floor-plan-images">
                {floorPlanImages.map((image, index) => (
                  <button
                    className="property-popup-trigger"
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setPopupImage({ src: image, alt: `${property.floorPlanTitle} ${index + 1}` })}
                  >
                    <img src={image} alt={`${property.floorPlanTitle} ${index + 1}`} />
                    <span>View larger</span>
                  </button>
                ))}
              </div>
            ) : (
              <p>No floor plan images have been added yet.</p>
            )}
          </div>
        </section>

        <section className="property-section">
          <p className="property-kicker">Floor Plan</p>
          <h2 className="property-section-title">Available Units</h2>
          <div className="property-units">
            {property.units.map((unit) => (
              <article className="property-unit" key={unit.unit}>
                <button
                  className="property-popup-trigger"
                  type="button"
                  onClick={() => setPopupImage({ src: unit.image, alt: unit.unit })}
                >
                  <img src={unit.image} alt={unit.unit} />
                  <span>View larger</span>
                </button>
                <div>
                  <h3>{unit.unit}</h3>
                  <p>{unit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      {popupImage && (
        <div
          className="property-image-popup"
          role="dialog"
          aria-modal="true"
          aria-label={popupImage.alt}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPopupImage(null);
          }}
        >
          <button
            className="property-image-popup-close"
            type="button"
            aria-label="Close image"
            onClick={() => setPopupImage(null)}
          >
            &times;
          </button>
          <img src={popupImage.src} alt={popupImage.alt} />
        </div>
      )}
    </main>
  );
}
