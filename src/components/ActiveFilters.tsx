import { getBudgetTitle } from "../data/budgets";
import { getLocationTitle } from "../data/locations";
import type { BudgetId, LocationId, PropertyType } from "../types/property";

type ActiveFiltersProps = {
  selectedType: PropertyType | null;
  selectedLocation: LocationId | null;
  selectedBudget: BudgetId | null;
  onClearType: () => void;
  onClearLocation: () => void;
  onClearBudget: () => void;
};

export function ActiveFilters({
  selectedType,
  selectedLocation,
  selectedBudget,
  onClearType,
  onClearLocation,
  onClearBudget
}: ActiveFiltersProps) {
  if (!selectedType && !selectedLocation && !selectedBudget) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {selectedType && (
        <FilterChip className="capitalize" label={selectedType} onClick={onClearType} />
      )}
      {selectedLocation && (
        <FilterChip label={getLocationTitle(selectedLocation)} onClick={onClearLocation} />
      )}
      {selectedBudget && <FilterChip label={getBudgetTitle(selectedBudget)} onClick={onClearBudget} />}
    </div>
  );
}

function FilterChip({
  label,
  className = "",
  onClick
}: {
  label: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex items-center gap-1.5 px-4 py-2 border border-primary rounded-full text-sm text-primary hover:bg-primary/10 transition-colors ${className}`}
      type="button"
      onClick={onClick}
    >
      {label}
      <span className="text-xs opacity-60" aria-hidden="true">
        ✕
      </span>
    </button>
  );
}
