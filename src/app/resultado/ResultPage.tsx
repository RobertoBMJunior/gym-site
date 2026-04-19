'use client'
import { SquareX } from 'lucide-react'
// app/resultado/Resultpage.tsx

import { useAnswers } from '../context/AnswersContext'
import { WorkoutCard } from './components/WorkoutCard'
import { selectWorkoutPlan } from './selectWorkoutPlan'
import Link from 'next/link'

export default function ResultPage() {
  const { answers } = useAnswers()

  if (!answers) {
    return (
      <section className="text-center p-5 my-5 md:p-10 flex flex-col items-center gap-4 h-min">
        <span className=" text-xl md:text-2xl">Treino Não Encontrado!</span>
        <SquareX className="w-16 h-16 md:w-30 md:h-30 hover:text-red-800 transition" />
        <Link
          href="/"
          aria-label="Ir para página Inicial"
          className="bg-[#DC2626]
          px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5
          rounded-full
          text-white
          font-semibold
          text-base sm:text-xl md:text-xl
          flex items-center
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          hover:shadow-red-600/40
          cursor-pointer
          hover:brightness-105
          active:scale-95"
        >
          Voltar para página inicial
        </Link>
      </section>
    )
  }

  const selectedWorkout = selectWorkoutPlan(answers)

  if (!selectedWorkout) {
    return (
      <section className="text-center p-5 my-5 md:p-10 flex flex-col items-center gap-4 h-min">
        <span className=" text-xl md:text-2xl">Treino Não Encontrado!</span>
        <SquareX className="w-16 h-16 md:w-30 md:h-30 hover:text-red-800 transition" />
      </section>
    )
  }

  return (
    <section className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-3">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800 mb-5">
            Seu protocolo de treino está pronto 💪
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto">
            {selectedWorkout.title}
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-8 text-center">
          <ul className="space-y-3 text-slate-700 font-medium">
            <li>🏋️ Frequência: {answers.frequency}</li>
            {/* <li>🎯 Objetivo: {answers.goal}</li> */}
            <li>📈 Nível: {answers.experience}</li>
          </ul>
        </div>

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

        <div className="text-center">
          <p className="text-slate-600 mb-4 pb-4">
            Quer salvar esse treino para acessar quando quiser?
          </p>

          <a
            href={selectedWorkout.pdfFile}
            download
            className="px-8 py-4 bg-red-600 text-white rounded-2xl font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            📄 Baixar treino em PDF
          </a>
        </div>
      </div>
    </section>
  )
}
