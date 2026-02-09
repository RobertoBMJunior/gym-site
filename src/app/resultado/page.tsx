'use client'
// app/resultado/page.tsx

import { useAnswers } from '../context/AnswersContext'
import { WorkoutCard } from './components/WorkoutCard'

export default function ResultPage() {
  const { answers } = useAnswers()
  console.log(answers)

  return (
    <section className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Seu protocolo de treino está pronto 💪
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Com base nas suas respostas, montamos um plano equilibrado, focado
            em evolução progressiva e resultados consistentes.
          </p>
        </div>

        {/* Contextualização */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <ul className="space-y-3 text-slate-700 font-medium">
            <li>🏋️ Divisão: Treino ABCD</li>
            <li>📅 Frequência: 4 dias por semana</li>
            <li>⏱️ Duração média: 50–60 minutos</li>
            <li>🎯 Foco: Hipertrofia muscular</li>
          </ul>
        </div>

        {/* Treinos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <WorkoutCard
            label="Treino A"
            caption="Peito • Ombro • Tríceps"
            exercises={[
              { name: 'Supino reto', sets: '4', reps: '8-10' },
              { name: 'Supino inclinado', sets: '3', reps: '10' },
              { name: 'Crucifixo', sets: '3', reps: '12' },
              { name: 'Tríceps corda', sets: '3', reps: '12' },
            ]}
          />

          <WorkoutCard
            label="Treino B"
            caption="Costas • Bíceps"
            exercises={[
              { name: 'Puxada frontal', sets: '4', reps: '10' },
              { name: 'Remada curvada', sets: '4', reps: '10' },
              { name: 'Remada baixa', sets: '4', reps: '10' },
              { name: 'Rosca direta', sets: '4', reps: '10' },
            ]}
          />

          <WorkoutCard
            label="Treino C"
            caption="Pernas • Glúteos"
            exercises={[
              { name: 'Agachamento livre', sets: '4', reps: '10' },
              { name: 'Leg press', sets: '4', reps: '10' },
              { name: 'Mesa flexora', sets: '4', reps: '10' },
              { name: 'Panturrilha em pé', sets: '4', reps: '10' },
            ]}
          />

          <WorkoutCard
            label="Treino D"
            caption="Core • Cardiorrespiratório"
            exercises={[
              { name: 'Prancha abdominal', sets: '4', reps: '10' },
              { name: 'Elevação de pernas', sets: '4', reps: '10' },
              { name: 'Abdominal crunch', sets: '4', reps: '10' },
              { name: 'Caminhada rápida', sets: '4', reps: '10' },
            ]}
          />
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
