import type { BudgetId, LocationId, PropertyType } from "../types/property";
import { ActiveFilters } from "./ActiveFilters";
import { BudgetSelection } from "./BudgetSelection";
import { LocationSelection } from "./LocationSelection";
import { PropertyTypeSelection } from "./PropertyTypeSelection";
import { StepIndicator } from "./StepIndicator";

type HeroProps = {
  currentStep: number;
  selectedType: PropertyType | null;
  selectedLocation: LocationId | null;
  selectedBudget: BudgetId | null;
  onSelectType: (type: PropertyType) => void;
  onSelectLocation: (location: LocationId) => void;
  onSelectBudget: (budget: BudgetId) => void;
  onClearType: () => void;
  onClearLocation: () => void;
  onClearBudget: () => void;
};

export function Hero({
  currentStep,
  selectedType,
  selectedLocation,
  selectedBudget,
  onSelectType,
  onSelectLocation,
  onSelectBudget,
  onClearType,
  onClearLocation,
  onClearBudget
}: HeroProps) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-32 relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-4">
          Find Your Perfect <span className="text-primary italic">Home</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Discover exceptional properties in Bangalore&apos;s most coveted neighborhoods
        </p>
      </div>

      <ActiveFilters
        selectedType={selectedType}
        selectedLocation={selectedLocation}
        selectedBudget={selectedBudget}
        onClearType={onClearType}
        onClearLocation={onClearLocation}
        onClearBudget={onClearBudget}
      />
      <StepIndicator currentStep={currentStep} totalSteps={3} />

      <div className="w-full max-w-6xl mx-auto">
        {currentStep === 0 && (
          <PropertyTypeSelection selectedType={selectedType} onSelect={onSelectType} />
        )}
        {currentStep === 1 && (
          <LocationSelection
            selectedType={selectedType}
            selectedLocation={selectedLocation}
            onSelect={onSelectLocation}
          />
        )}
        {currentStep === 2 && (
          <BudgetSelection
            selectedType={selectedType}
            selectedLocation={selectedLocation}
            selectedBudget={selectedBudget}
            onSelect={onSelectBudget}
          />
        )}
      </div>
    </main>
  );
}
