'use client'
// app/resultado/page.tsx

import { useAnswers } from '../context/AnswersContext'
import { WorkoutCard } from './components/WorkoutCard'
import { selectWorkoutPlan } from './selectWorkoutPlan'

export default function ResultPage() {
  const { answers } = useAnswers()

  if (!answers) {
    return <div>Carregando...</div>
  }

  // agora o treino é selecionado dinamicamente
  const selectedWorkout = selectWorkoutPlan(answers)

  if (!selectedWorkout) {
    return <div>Treino não encontrado</div>
  }

  return (
    <section className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Seu protocolo de treino está pronto 💪
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto">
            {selectedWorkout.title}
          </p>
        </div>

        {/* Contextualização */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <ul className="space-y-3 text-slate-700 font-medium">
            <li>🏋️ Frequência: {answers.frequency}</li>
            <li>🎯 Objetivo: {answers.goal}</li>
            <li>📈 Nível: {answers.experience}</li>
          </ul>
        </div>

        {/* Treinos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {selectedWorkout.workOutRoutine.map((routine, index) => (
            <WorkoutCard
              key={index}
              label={routine.label}
              caption={routine.caption}
              exercises={routine.exercises}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-4">
            Quer salvar esse treino para acessar quando quiser?
          </p>

          <button className="px-8 py-4 bg-red-600 text-white rounded-2xl font-semibold hover:bg-red-700 transition cursor-pointer">
            📄 Baixar treino em PDF
          </button>
        </div>
      </div>
    </section>
  )
}
