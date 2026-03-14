// app/resultado/components/WorkoutCard.tsx

interface Exercise {
  name: string
  sets: string | number
  reps: string | number
  rest: string | number
}

interface WorkoutCardProps {
  label: string
  caption: string
  exercises: Exercise[]
}

export function WorkoutCard({ label, caption, exercises }: WorkoutCardProps) {
  return (
    <div className="bg-[#E9E6D1] border border-slate-300 rounded-3xl p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-700">{label}</h3>
        <p className="text-sm text-slate-500">{caption}</p>
      </div>

      <ul className="space-y-4">
        {exercises.map((exercise, index) => (
          <li
            key={index}
            className="border-b border-slate-300 pb-3 last:border-none"
          >
            {/* Nome do exercício */}
            <p className="font-semibold text-slate-700 mb-1">
              {index + 1}. {exercise.name}
            </p>

            {/* Sets / Reps e Descanso */}
            <div className="flex justify-between text-sm text-slate-500">
              <span>
                {exercise.sets} x {exercise.reps}
              </span>

              {exercise.rest && (
                <span className="text-slate-400">descanso {exercise.rest}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
