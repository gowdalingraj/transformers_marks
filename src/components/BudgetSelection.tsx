import { budgets } from "../data/budgets";
import type { BudgetId } from "../types/property";
import { RupeeIcon } from "./icons";

type BudgetSelectionProps = {
  selectedBudget: BudgetId | null;
  onSelect: (budget: BudgetId) => void;
};

export function BudgetSelection({
  selectedBudget,
  onSelect
}: BudgetSelectionProps) {
  return (
    <section className="text-center" aria-labelledby="budget-title">
      <h2 id="budget-title" className="text-3xl md:text-4xl font-heading mb-3">
        Your Budget Range
      </h2>
      <p className="text-muted-foreground mb-8">Select your investment range</p>
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
