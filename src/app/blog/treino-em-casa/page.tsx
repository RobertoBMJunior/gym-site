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
        melhorar o condicionamento físico, ganhar força e até emagrecer. Se você
        ainda está no começo, vale entender primeiro como funciona um{' '}
        <Link
          href="/blog/treino-para-iniciantes"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para iniciantes
        </Link>{' '}
        para montar uma base sólida.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino em casa funciona mesmo?
      </h2>

      <p className="mb-4">
        Sim. Mesmo sem equipamentos, você pode ter resultados utilizando o peso
        do próprio corpo. O mais importante é manter consistência e executar os
        exercícios corretamente. Dependendo do seu objetivo, você pode adaptar o
        treino, seja para ganhar força ou focar mais em{' '}
        <Link
          href="/blog/treino-para-emagrecer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          emagrecimento
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Exemplo de treino em casa para iniciantes
      </h2>

      <p className="mb-4">
        Este treino pode ser feito 3 vezes por semana e segue uma lógica de
        corpo inteiro (full body), muito indicada para iniciantes:
      </p>

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
        como polichinelos, corrida no lugar e circuitos com pouco descanso. Esse
        tipo de treino também pode evoluir com o tempo para estruturas mais
        organizadas, como o{' '}
        <Link
          href="/blog/treino-abc"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino ABC
        </Link>
        , caso você decida treinar com mais frequência.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Quantos dias por semana treinar em casa?
      </h2>

      <p className="mb-4">
        O ideal é treinar entre 3 a 5 vezes por semana. Comece com menos dias e
        aumente conforme seu corpo se adapta. Isso vale tanto para homens quanto
        mulheres, podendo adaptar o treino conforme o objetivo, como em um{' '}
        <Link
          href="/blog/treino-feminino"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino feminino
        </Link>
        .
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

      {/* 🔥 Links internos finais */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h3 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
          Veja também
        </h3>

        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/blog/treino-para-iniciantes"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino para iniciantes
            </Link>
          </li>

          <li>
            <Link
              href="/blog/treino-para-emagrecer"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino para emagrecer
            </Link>
          </li>

          <li>
            <Link
              href="/blog/treino-feminino"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino feminino
            </Link>
          </li>
        </ul>
      </div>

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
