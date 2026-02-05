'use client'

import { Stepper } from './components/Stepper'

import { useState } from 'react'
import { questions } from './questions'
import { useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { useAnswers } from '../context/AnswersContext'

type FormAnswers = Record<string, string | number>

export default function PerguntasProtocoloPage() {
  const router = useRouter()

  const { register, handleSubmit, setValue, control } = useForm<FormAnswers>()
  const { setAnswers } = useAnswers()

  const [currentStep, setCurrentStep] = useState(0)

  const totalSteps = questions.length
  const currentQuestion = questions[currentStep]

  const selectedValue = useWatch({
    control,
    name: currentQuestion.id,
  })

  const hasAnsweredCurrent = selectedValue !== undefined && selectedValue !== ''

  function nextQuestion() {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  function prevQuestion() {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  function saveOption(value: string | number) {
    setValue(currentQuestion.id, value, {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  function saveAnswer(data: FormAnswers) {
    if (currentStep !== totalSteps - 1) return

    setAnswers(data)
    router.push('/resultado')
  }

  return (
    <main className="py-10">
      <form
        onSubmit={handleSubmit(saveAnswer)}
        className="min-h-screen bg-slate-50 flex flex-col items-center justify-start px-7"
      >
        <Stepper currentStep={currentStep} totalSteps={totalSteps} />

        {/*QuestionCard*/}

        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-8 mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {currentQuestion.title}
          </h2>

          {currentQuestion.description && (
            <p className="text-slate-600 mb-6">{currentQuestion.description}</p>
          )}

          {currentQuestion.type === 'options' && (
            <div className="grid gap-3">
              {currentQuestion.options?.map((option) => {
                const isSelected = selectedValue === option

                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => saveOption(option)}
                    className={`
            w-full border rounded-xl px-4 py-3 text-left font-medium transition
            ${
              isSelected
                ? 'border-red-600 bg-red-50 text-red-700'
                : 'border-slate-200 text-slate-700 hover:border-red-500 hover:bg-red-50'
            }
          `}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          )}

          {currentQuestion.type === 'number' && (
            <input
              key={currentQuestion.id}
              type="number"
              placeholder={currentQuestion.placeholder}
              {...register(currentQuestion.id)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}
        </div>

        {/* ^^^^^ QuestionCard ^^^^^*/}

        <div className="flex justify-between w-full max-w-2xl mt-6">
          <button
            type="button"
            onClick={prevQuestion}
            disabled={currentStep === 0}
            className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-800 transition-colors disabled:opacity-40"
          >
            Voltar
          </button>

          {currentStep !== totalSteps - 1 ? (
            <button
              type="button"
              onClick={nextQuestion}
              disabled={!hasAnsweredCurrent}
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition-colors disabled:opacity-40"
            >
              Próxima pergunta
            </button>
          ) : (
            <button
              type="submit"
              disabled={!hasAnsweredCurrent}
              className="px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors disabled:opacity-40"
            >
              Enviar Formulário
            </button>
          )}
        </div>
      </form>
    </main>
  )
}
