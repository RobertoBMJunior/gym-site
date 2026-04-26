import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treino feminino: guia completo para iniciantes e definição',
  description:
    'Veja como montar um treino feminino eficiente para emagrecer, ganhar glúteos e definir o corpo. Guia completo para iniciantes.',
  keywords: [
    'treino feminino',
    'treino para mulheres',
    'treino feminino academia',
    'treino para glúteos',
    'treino feminino para emagrecer',
  ],
}

export default function TreinoFeminino() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Treino feminino: como montar um treino para emagrecer e definir o corpo
      </h1>

      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
        <Image
          src="/images/blog/treino-feminino.jpg"
          alt="treino feminino na academia"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-4">
        O treino feminino pode ser adaptado para diferentes objetivos, como
        emagrecimento, definição muscular ou ganho de glúteos. O mais importante
        é seguir um plano adequado ao seu nível e manter consistência. Se você
        está começando agora, vale entender primeiro como funciona um{' '}
        <Link
          href="/blog/treino-para-iniciantes"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para iniciantes
        </Link>{' '}
        antes de evoluir para treinos mais específicos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino feminino é diferente?
      </h2>

      <p className="mb-4">
        Na prática, os exercícios são os mesmos, mas o foco costuma mudar.
        Muitas mulheres priorizam membros inferiores, como glúteos e pernas,
        além de treinos voltados para definição e emagrecimento. Dependendo do
        objetivo, é comum combinar estratégias usadas em um{' '}
        <Link
          href="/blog/treino-para-emagrecer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para emagrecer
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Exemplo de treino feminino para iniciantes
      </h2>

      <p className="mb-4">
        Este treino pode ser feito 3 vezes por semana e segue uma estrutura de
        corpo inteiro, muito eficiente para iniciantes:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Agachamento Sumô – 3x12–15</li>
        <li>Puxada Aberta no Pulley – 3x12</li>
        <li>Cadeira Flexora – 3x12–15</li>
        <li>Supino Vertical Máquina – 3x12</li>
        <li>Elevação Pélvica (Solo ou Banco) – 3x15</li>
        <li>Prancha Abdominal – 3x30–45 seg</li>
        <li>Cardio: Elíptico ou Esteira – 15–20 minutos</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino feminino para glúteos e pernas
      </h2>

      <p className="mb-4">
        Para quem quer dar mais foco em glúteos e pernas, exercícios como
        agachamento, stiff, elevação de quadril e afundo são essenciais. Esses
        exercícios também podem ser adaptados para um{' '}
        <Link
          href="/blog/treino-em-casa"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino em casa
        </Link>{' '}
        com poucas adaptações.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino feminino para emagrecer
      </h2>

      <p className="mb-4">
        Se o objetivo for emagrecer, o ideal é combinar musculação com
        exercícios cardiovasculares, como caminhada, corrida ou HIIT. Com o
        tempo, você pode evoluir para treinos mais organizados, como o{' '}
        <Link
          href="/blog/treino-abc"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino ABC
        </Link>
        , que permite dividir melhor os grupos musculares.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Quantos dias por semana treinar?
      </h2>

      <p className="mb-4">
        O ideal é treinar entre 3 a 5 vezes por semana, respeitando o descanso e
        aumentando a frequência conforme evolução.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Dicas importantes para melhores resultados
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Foque na execução correta dos exercícios</li>
        <li>Mantenha consistência</li>
        <li>Combine treino com alimentação equilibrada</li>
        <li>Durma bem</li>
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
              href="/blog/treino-em-casa"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino em casa
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Quer um treino feminino personalizado?
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
