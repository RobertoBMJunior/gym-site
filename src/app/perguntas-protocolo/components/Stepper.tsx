interface StepperProps {
  currentStep: number
  totalSteps: number
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <div className="w-full flex items-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1
        const isActive = step === currentStep
        const isCompleted = step < currentStep

        return (
          <div key={step} className="flex items-center flex-1 gap-2">
            {/* Bolinha */}
            <div
              className={`
                h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold
                ${
                  isCompleted
                    ? 'bg-green-600 text-white'
                    : isActive
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-200 text-slate-500'
                }
              `}
            >
              {step}
            </div>

            {/* Linha */}
            {step < totalSteps && (
              <div
                className={`
                  h-1 flex-1 rounded
                  ${isCompleted ? 'bg-green-600' : 'bg-slate-200'}
                `}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
