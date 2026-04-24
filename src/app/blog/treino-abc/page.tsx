import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treino ABC: como funciona e como montar (guia completo)',
  description:
    'Entenda como funciona o treino ABC, uma das divisões mais populares da musculação. Veja como montar e quando usar.',
  keywords: [
    'treino abc',
    'divisão abc academia',
    'treino abc como funciona',
    'treino abc hipertrofia',
    'treino abc 5 dias',
  ],
}

export default function TreinoABC() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Treino ABC: como funciona e como usar para ganhar massa muscular
      </h1>

      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
        <Image
          src="/images/blog/treino-abc.jpg"
          alt="treino abc academia divisão de treino"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-4">
        O treino ABC é uma das divisões de treino mais populares na musculação.
        Ele organiza os exercícios por grupos musculares, permitindo maior foco
        em cada região do corpo e melhor recuperação entre os treinos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">O que é treino ABC?</h2>

      <p className="mb-4">
        No treino ABC, os exercícios são divididos em três dias diferentes,
        normalmente separados por grupos musculares. Um exemplo comum é:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Treino A: Peito, ombro e tríceps</li>
        <li>Treino B: Costas e bíceps</li>
        <li>Treino C: Pernas e glúteos</li>
      </ul>

      <p className="mb-4">
        Essa divisão permite treinar com mais intensidade, já que você não
        precisa trabalhar o corpo inteiro em um único dia.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Para quem o treino ABC é indicado?
      </h2>

      <p className="mb-4">
        O treino ABC é ideal para quem já tem alguma experiência na academia e
        quer evoluir para uma divisão mais estruturada, focando em hipertrofia
        (ganho de massa muscular).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino ABC 6 vezes por semana
      </h2>

      <p className="mb-4">
        A forma mais clássica de usar o treino ABC é treinando 6 vezes por
        semana, repetindo o ciclo duas vezes:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>A – B – C – A – B – C</li>
      </ul>

      <p className="mb-4">
        Nesse formato, cada grupo muscular é treinado duas vezes na semana, o
        que pode gerar ótimos resultados em hipertrofia.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino ABC 5 vezes por semana (muito comum)
      </h2>

      <p className="mb-4">
        Mesmo sendo mais indicado para 6 dias, muitas pessoas adaptam o treino
        ABC para 5 vezes por semana. Nesse caso, o treino continua sendo
        rotativo:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Semana 1: A – B – C – A – B</li>
        <li>Semana 2: C – A – B – C – A</li>
      </ul>

      <p className="mb-4">
        Essa estratégia mantém o equilíbrio entre os grupos musculares ao longo
        das semanas, sendo uma opção prática para quem não consegue treinar
        todos os dias.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Vantagens do treino ABC
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Maior foco em cada grupo muscular</li>
        <li>Melhor recuperação entre treinos</li>
        <li>Mais volume de treino por músculo</li>
        <li>Excelente para hipertrofia</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino ABC ou treino iniciante?
      </h2>

      <p className="mb-4">
        Se você está começando, o ideal ainda é um treino mais simples, como o
        treino de corpo inteiro. O treino ABC faz mais sentido quando você já
        tem alguma adaptação ao treino.
      </p>

      <div className="bg-slate-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Quer descobrir se o treino ABC é ideal para você?
        </h2>

        <p className="mb-4">
          Responda algumas perguntas rápidas e receba um treino personalizado de
          acordo com seu nível e frequência de treino.
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
