interface StepperProps {
  currentStep: number
  totalSteps: number
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-10 rounded-full transition-colors ${
            index <= currentStep ? 'bg-red-600' : 'bg-slate-200'
          }`}
        />
      ))}
    </div>
  )
}
