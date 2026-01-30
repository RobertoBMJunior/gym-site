// app/resultado/components/WorkoutCard.tsx

interface Exercise {
  name: string
  sets: string
}

interface WorkoutCardProps {
  title: string
  subtitle: string
  exercises: Exercise[]
}

export function WorkoutCard({ title, subtitle, exercises }: WorkoutCardProps) {
  return (
    <div className="bg-[#E9E6D1] border border-slate-300 rounded-3xl p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-700">{title}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>

      <ul className="space-y-3">
        {exercises.map((exercise, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-slate-300 pb-2 last:border-none"
          >
            <span className="font-medium text-slate-700">{exercise.name}</span>
            <span className="text-sm text-slate-500">{exercise.sets}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
