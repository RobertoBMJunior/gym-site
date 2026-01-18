import { Stepper } from './components/Stepper'
import { QuestionCard } from './components/QuestionCard'

export default function PerguntasProtocoloPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        {/* Stepper */}
        <Stepper currentStep={2} totalSteps={6} />

        {/* Card da pergunta */}
        <QuestionCard />
      </div>
    </main>
  )
}
