import { Question } from '../questions'

interface QuestionCardProps {
  question: Question
  onAnswer: (value: string | number) => void
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        {question.title}
      </h2>

      {question.description && (
        <p className="text-slate-600 mb-6">{question.description}</p>
      )}

      {question.type === 'options' && (
        <div className="grid gap-3">
          {question.options?.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-left font-medium text-slate-700 hover:border-red-500 hover:bg-red-50 transition"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {question.type === 'number' && (
        <input
          type="number"
          placeholder={question.placeholder}
          onChange={(e) => onAnswer(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      )}
    </div>
  )
}
