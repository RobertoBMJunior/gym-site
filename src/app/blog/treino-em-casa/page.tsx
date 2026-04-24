import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treino em casa: guia completo para iniciantes (sem equipamentos)',
  description:
    'Aprenda como fazer um treino em casa eficiente, sem equipamentos. Veja exercícios, dicas e monte seu treino ideal.',
  keywords: [
    'treino em casa',
    'treino em casa para iniciantes',
    'exercícios em casa',
    'treino sem equipamentos',
    'treino em casa para emagrecer',
  ],
}

export default function TreinoEmCasa() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Treino em casa: como treinar sem equipamentos e ter resultados
      </h1>

      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
        <Image
          src="/images/blog/treino-em-casa.jpg"
          alt="treino em casa sem equipamentos"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-4">
        Fazer um treino em casa é uma ótima opção para quem quer começar a se
        exercitar sem precisar de academia. Com os exercícios certos, é possível
        melhorar o condicionamento físico, ganhar força e até emagrecer.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino em casa funciona mesmo?
      </h2>

      <p className="mb-4">
        Sim. Mesmo sem equipamentos, você pode ter resultados utilizando o peso
        do próprio corpo. O mais importante é manter consistência e executar os
        exercícios corretamente.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Exemplo de treino em casa para iniciantes
      </h2>

      <p className="mb-4">Este treino pode ser feito 3 vezes por semana:</p>

      <ul className="list-disc pl-6 mb-4">
        <li>Agachamento – 3x12</li>
        <li>Flexão de braço – 3x8</li>
        <li>Prancha – 3x20 segundos</li>
        <li>Polichinelo – 3x30 segundos</li>
        <li>Abdominal – 3x15</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino em casa para emagrecer
      </h2>

      <p className="mb-4">
        Para quem quer emagrecer, o ideal é incluir exercícios mais dinâmicos,
        como polichinelos, corrida no lugar e circuitos com pouco descanso.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Quantos dias por semana treinar em casa?
      </h2>

      <p className="mb-4">
        O ideal é treinar entre 3 a 5 vezes por semana. Comece com menos dias e
        aumente conforme seu corpo se adapta.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Dicas para ter resultados treinando em casa
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Crie uma rotina fixa de treino</li>
        <li>Evite distrações durante o treino</li>
        <li>Mantenha uma alimentação equilibrada</li>
        <li>Seja consistente</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Quer um treino personalizado para treinar em casa?
        </h2>

        <p className="mb-4">
          Responda algumas perguntas rápidas e receba um treino ideal para o seu
          objetivo.
        </p>

        <Link
          href="/perguntas-protocolo"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition"
        >
          Gerar meu treino agora
        </Link>
      </div>
    </article>
  )
}
