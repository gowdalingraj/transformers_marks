import { FormEvent, useState } from "react";
import { getBudgetTitle } from "../data/budgets";
import { getLocationTitle } from "../data/locations";
import type { BudgetId, LocationId, PropertyType } from "../types/property";
import { BackButton } from "./BackButton";

type LeadPageProps = {
  selectedType: PropertyType | null;
  selectedLocation: LocationId | null;
  selectedBudget: BudgetId | null;
  propertyName: string | null;
  onBack: () => void;
};

export function LeadPage({
  selectedType,
  selectedLocation,
  selectedBudget,
  propertyName,
  onBack
}: LeadPageProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setMessage("Please enter your name and phone number.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    console.log("Lead payload ready to send:", {
      name: name.trim(),
      phone: phone.trim(),
      propertyType: selectedType,
      location: selectedLocation,
      budget: selectedBudget,
      propertyName
    });

    setName("");
    setPhone("");
    setMessage("");
    setSubmitted(true);
  }

  return (
    <main className="lead-page relative z-10 flex-1 px-6 pb-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <BackButton label="Back" onClick={onBack} />

        <section className="lead-page-layout">
          <div className="lead-page-copy">
            <h1 className="font-heading text-3xl font-medium text-primary md:text-5xl">
              Almost There!
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              Share your details and our team will get back to you with the best options.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {propertyName && <SelectionPill label={propertyName} />}
              {selectedType && <SelectionPill label={selectedType} className="capitalize" />}
              {selectedLocation && <SelectionPill label={getLocationTitle(selectedLocation)} />}
              {selectedBudget && <SelectionPill label={getBudgetTitle(selectedBudget)} />}
            </div>
          </div>

          <form className="lead-page-form" onSubmit={handleSubmit}>
            <label className="lead-form-field">
              <span className="lead-form-label">Full Name</span>
              <input
                className="lead-form-input"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                maxLength={100}
              />
            </label>
            <label className="lead-form-field">
              <span className="lead-form-label">Phone Number</span>
              <input
                className="lead-form-input"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))
                }
                placeholder="10-digit mobile number"
                inputMode="numeric"
              />
            </label>
            {message && <p className="text-sm text-destructive">{message}</p>}
            {submitted && (
              <p className="text-sm text-primary">
                Thank you. Our team will contact you shortly.
              </p>
            )}
            <button
              className="lead-submit-button"
              type="submit"
            >
              Get My Property Matches
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

function SelectionPill({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-flex rounded-full border border-primary px-3 py-1 text-xs text-primary ${className}`}
    >
      {label}
    </span>
  );
}
