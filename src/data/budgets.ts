import type { BudgetId } from "../types/property";

export type BudgetOption = {
  id: BudgetId;
  title: string;
  subtitle: string;
};

export const budgets: BudgetOption[] = [
  { id: "50l-1cr", title: "50L - 1Cr", subtitle: "Budget Friendly" },
  { id: "1cr-2cr", title: "1Cr - 2Cr", subtitle: "Mid Range" },
  { id: "2cr-5cr", title: "2Cr - 5Cr", subtitle: "Premium" },
  { id: "5cr+", title: "5Cr+", subtitle: "Ultra Luxury" }
];

export function getBudgetTitle(id: BudgetId | null) {
  return budgets.find((budget) => budget.id === id)?.title ?? "";
}
