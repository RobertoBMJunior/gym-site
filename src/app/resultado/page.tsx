import { BadgeCheck, Dumbbell, Download } from 'lucide-react'

export default function ResultadoPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Seu protocolo de treino está pronto 💪
          </h1>
          <p className="text-slate-600">
            Criamos um treino baseado nas suas respostas.
          </p>
        </div>

        {/* Resumo do perfil */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-slate-500 text-sm">Objetivo</p>
            <p className="font-semibold text-slate-900">
              Ganho de massa muscular
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-slate-500 text-sm">Nível</p>
            <p className="font-semibold text-slate-900">Intermediário</p>
          </div>

          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-slate-500 text-sm">Frequência</p>
            <p className="font-semibold text-slate-900">4x por semana</p>
          </div>
        </div>

        {/* Card principal do protocolo */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Dumbbell className="text-red-600" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">
              Protocolo recomendado
            </h2>
          </div>

          <ul className="space-y-3 text-slate-700 font-medium">
            <li>🏋️ Divisão: Treino ABC</li>
            <li>📅 Frequência: 4 dias por semana</li>
            <li>⏱️ Duração média: 50–60 minutos</li>
            <li>🎯 Foco: Hipertrofia muscular</li>
          </ul>
        </div>

        {/* O que está incluso */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            O que você vai receber
          </h3>

          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-green-600" />
              <span>Exercícios organizados por grupo muscular</span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck className="text-green-600" />
              <span>Sugestão de séries e repetições</span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck className="text-green-600" />
              <span>Tempo de descanso recomendado</span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck className="text-green-600" />
              <span>Treino pensado para evolução progressiva</span>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-red-600 hover:brightness-105 transition px-10 py-5 rounded-full text-white font-semibold text-xl cursor-pointer">
            <Download />
            Baixar protocolo em PDF
          </button>

          <p className="text-slate-500 text-sm mt-4">
            Você pode salvar ou imprimir seu treino.
          </p>
        </div>
      </div>
    </main>
  )
}
