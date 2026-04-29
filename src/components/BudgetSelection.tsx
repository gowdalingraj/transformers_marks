import { budgets } from "../data/budgets";
import { getLocationTitle } from "../data/locations";
import type { BudgetId, LocationId, PropertyType } from "../types/property";
import { RupeeIcon } from "./icons";

type BudgetSelectionProps = {
  selectedType: PropertyType | null;
  selectedLocation: LocationId | null;
  selectedBudget: BudgetId | null;
  onSelect: (budget: BudgetId) => void;
};

export function BudgetSelection({
  selectedType,
  selectedLocation,
  selectedBudget,
  onSelect
}: BudgetSelectionProps) {
  return (
    <section className="text-center" aria-labelledby="budget-title">
      <h2 id="budget-title" className="text-3xl md:text-4xl font-heading mb-3">
        Your Budget Range
      </h2>
      <p className="text-muted-foreground mb-8">Select your investment range</p>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {selectedType && (
          <span className="px-4 py-2 border border-primary rounded-full text-sm text-primary capitalize">
            {selectedType}
          </span>
        )}
        {selectedLocation && (
          <span className="px-4 py-2 border border-primary rounded-full text-sm text-primary">
            {getLocationTitle(selectedLocation)}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {budgets.map((budget) => (
          <button
            className={`selection-card ${selectedBudget === budget.id ? "active" : ""}`}
            key={budget.id}
            type="button"
            aria-pressed={selectedBudget === budget.id}
            onClick={() => onSelect(budget.id)}
          >
            <div className="icon-circle">
              <RupeeIcon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-medium mb-1">{budget.title}</h3>
            <p className="text-sm text-muted-foreground">{budget.subtitle}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
