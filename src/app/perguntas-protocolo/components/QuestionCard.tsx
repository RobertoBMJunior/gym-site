export function QuestionCard() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-lg border border-slate-200 p-8 flex flex-col gap-6">
      {/* Título */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-slate-900">
          Qual é o seu objetivo principal?
        </h2>
        <p className="text-slate-600">
          Essa informação nos ajuda a montar um treino mais eficiente para você.
        </p>
      </div>

      {/* Opções (mock visual) */}
      <div className="flex flex-col gap-3">
        {[
          'Ganhar massa muscular',
          'Perder gordura',
          'Melhorar condicionamento físico',
          'Saúde e bem-estar',
        ].map((option) => (
          <button
            key={option}
            className="
              w-full text-left px-5 py-4 rounded-xl border border-slate-200
              hover:border-slate-400 hover:bg-slate-50
              transition-colors
            "
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navegação */}
      <div className="flex justify-between items-center pt-4">
        <button className="text-slate-500 hover:text-slate-700 transition-colors">
          Voltar
        </button>

        <button className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">
          Próxima pergunta
        </button>
      </div>
    </div>
  )
}
