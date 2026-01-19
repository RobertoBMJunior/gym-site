'use client'

import { QuestionCard } from './components/QuestionCard'
import { Stepper } from './components/Stepper'
import { useProtocolForm } from './hooks/useProtocolForm'

export default function PerguntasProtocoloPage() {
  const { currentStep, totalSteps, currentQuestion, next, prev, saveAnswer } =
    useProtocolForm()

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
      <Stepper currentStep={currentStep} totalSteps={totalSteps} />

      <QuestionCard
        question={currentQuestion}
        onAnswer={(value) => {
          saveAnswer(value)
          next()
        }}
      />

      <div className="flex justify-between w-full max-w-2xl mt-6">
        <button
          onClick={prev}
          disabled={currentStep === 0}
          className="text-slate-500 font-medium disabled:opacity-40"
        >
          Voltar
        </button>

        <span className="text-slate-400">
          Pergunta {currentStep + 1} de {totalSteps}
        </span>
      </div>
    </main>
  )
}
