import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treino para emagrecer rápido | Guia completo para perder gordura',
  description:
    'Descubra o melhor treino para emagrecer rápido, com exercícios eficazes, dicas práticas e estratégias para perder gordura com saúde.',
  keywords: [
    'treino para emagrecer',
    'treino para perder gordura',
    'como emagrecer rápido',
    'treino para secar barriga',
    'exercícios para emagrecer',
  ],
}

export default function TreinoParaEmagrecer() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Treino para emagrecer: como perder gordura de forma eficiente
      </h1>

      <Image
        src="/images/blog/treino-para-emagrecer.jpg"
        alt="treino para emagrecer na academia"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />

      <p className="mb-4">
        Se o seu objetivo é emagrecer, combinar o treino certo com consistência
        é fundamental. Um bom treino para emagrecer ajuda a queimar calorias,
        acelerar o metabolismo e preservar a massa muscular. Se você ainda está
        começando, vale entender primeiro como funciona um{' '}
        <Link
          href="/blog/treino-para-iniciantes"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para iniciantes
        </Link>{' '}
        antes de aumentar a intensidade.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Qual o melhor treino para emagrecer?
      </h2>

      <p className="mb-4">
        Não existe um único treino perfeito, mas os melhores resultados vêm da
        combinação de exercícios de força com atividades cardiovasculares. Com o
        tempo, você pode evoluir para treinos mais estruturados, como o{' '}
        <Link
          href="/blog/treino-abc"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino ABC
        </Link>
        , que permite trabalhar diferentes grupos musculares com mais foco.
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Musculação (para manter massa muscular)</li>
        <li>Cardio (corrida, caminhada, bicicleta)</li>
        <li>Treinos intensos como HIIT</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Exemplo de treino para emagrecer (iniciante)
      </h2>

      <p className="mb-4">
        Veja um exemplo simples que pode ser feito por iniciantes na academia.
        Esse modelo segue uma estrutura de corpo inteiro, semelhante a um treino
        full body, muito eficiente para quem quer emagrecer no começo:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Agachamento Livre ou Máquina – 3x10–12</li>
        <li>Supino Reto (Máquina) – 3x10–12</li>
        <li>Puxada Aberta no Pulley – 3x10–12</li>
        <li>Leg Press 45º – 3x12</li>
        <li>Desenvolvimento de Ombros (Máquina) – 3x12</li>
        <li>Abdominal Supra (Solo) – 3x15–20</li>
        <li>Caminhada Inclinada ou Bike – 15 a 20 minutos</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino para emagrecer em casa funciona?
      </h2>

      <p className="mb-4">
        Sim. Você não precisa de academia para começar. Exercícios com o peso do
        próprio corpo já são suficientes para iniciar a perda de gordura. Se
        esse é o seu caso, veja também esse{' '}
        <Link
          href="/blog/treino-em-casa"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino em casa
        </Link>{' '}
        que pode te ajudar a começar sem equipamentos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Quantas vezes por semana treinar para emagrecer?
      </h2>

      <p className="mb-4">
        O ideal é treinar entre 3 a 5 vezes por semana, mantendo consistência e
        respeitando o descanso. O mais importante é manter uma rotina regular,
        independentemente do tipo de treino escolhido.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Dicas importantes para acelerar o emagrecimento
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Manter uma alimentação equilibrada</li>
        <li>Beber bastante água</li>
        <li>Dormir bem</li>
        <li>Evitar longos períodos sem atividade</li>
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
              href="/blog/treino-em-casa"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino em casa
            </Link>
          </li>

          <li>
            <Link
              href="/blog/treino-abc"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino ABC explicado
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Quer um treino personalizado para emagrecer?
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
