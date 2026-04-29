type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-1 mb-8" aria-hidden="true">
      {Array.from({ length: totalSteps }).map((_, step) => (
        <div className="flex items-center" key={step}>
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              step <= currentStep ? "bg-primary" : "bg-muted-foreground/40"
            }`}
          />
          {step < totalSteps - 1 && (
            <div
              className={`w-8 h-0.5 transition-all duration-300 ${
                step < currentStep ? "bg-primary" : "bg-muted-foreground/40"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
