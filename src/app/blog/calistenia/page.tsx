import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calistenia: o que é e como começar do jeito certo',
  description:
    'Aprenda o que é calistenia, como começar e veja exercícios para ganhar força, músculo e melhorar o condicionamento físico.',
  keywords: [
    'calistenia',
    'treino de calistenia',
    'calistenia para iniciantes',
    'exercícios de calistenia',
    'treino com peso do corpo',
  ],
}

export default function Calistenia() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Calistenia: como começar e ganhar força usando o peso do corpo
      </h1>

      <p className="text-sm text-slate-500 mb-2">
        Publicado em 06 de maio de 2026
      </p>

      <p className="text-lg text-slate-600 mb-6">
        Aprenda o que é calistenia, como começar e veja exercícios para ganhar
        força, músculo e melhorar o condicionamento físico usando apenas o peso do corpo.
      </p>

      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
        <Image
          src="/images/blog/calistenia1.jpg"
          alt="treino de calistenia em parque"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-4">
        A calistenia é um método de treino baseado em exercícios com o peso do
        próprio corpo. Ela pode ser praticada em casa, parques ou praças, sendo
        uma ótima alternativa para quem não quer depender de academia. Se você
        ainda está começando, vale entender primeiro como funciona um{' '}
        <Link
          href="/blog/treino-para-iniciantes"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para iniciantes
        </Link>{' '}
        antes de avançar para movimentos mais difíceis.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">O que é calistenia?</h2>

      <p className="mb-4">
        A calistenia utiliza movimentos naturais do corpo, como empurrar, puxar,
        agachar e sustentar posições. Exercícios como flexões, barras e
        paralelas são muito comuns nesse tipo de treino.
      </p>

      <p className="mb-4">
        Diferente da musculação tradicional, a progressão na calistenia acontece
        através da dificuldade dos movimentos e do controle corporal.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Calistenia ajuda a ganhar massa muscular?
      </h2>

      <p className="mb-4">
        Sim. Apesar de muita gente associar calistenia apenas ao condicionamento
        físico, ela também pode gerar hipertrofia e ganho de força. Exercícios
        avançados criam bastante tensão muscular e podem trazer ótimos
        resultados.
      </p>

      <p className="mb-4">
        Inclusive, muitas pessoas combinam calistenia com estruturas de treino
        mais organizadas, como o{' '}
        <Link
          href="/blog/treino-upper-lower"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino upper lower
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Exercícios básicos de calistenia para iniciantes
      </h2>

      <p className="mb-4">
        Quem está começando deve focar nos movimentos fundamentais:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Flexão de braço</li>
        <li>Agachamento livre</li>
        <li>Barra fixa assistida</li>
        <li>Prancha abdominal</li>
        <li>Paralela assistida</li>
      </ul>

      <p className="mb-4">
        Esses exercícios já permitem desenvolver força, coordenação e
        resistência muscular.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Calistenia ou musculação?
      </h2>

      <p className="mb-4">
        As duas opções funcionam muito bem. A musculação oferece mais facilidade
        para controlar cargas e isolar músculos, enquanto a calistenia melhora
        bastante o domínio corporal e a força relativa.
      </p>

      <p className="mb-4">
        Para quem treina poucos dias na semana, também vale conhecer modelos
        como o{' '}
        <Link
          href="/blog/treino-full-body"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino full body
        </Link>
        , que combina muito bem com exercícios corporais.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Calistenia ajuda a emagrecer?
      </h2>

      <p className="mb-4">
        Sim. Como muitos exercícios usam vários músculos ao mesmo tempo, o gasto
        calórico pode ser elevado. Circuitos com pouco descanso são excelentes
        para melhorar o condicionamento físico e acelerar o emagrecimento.
      </p>

      <p className="mb-4">
        Se esse for seu objetivo principal, vale conferir também nosso guia de{' '}
        <Link
          href="/blog/treino-para-emagrecer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para emagrecer
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Quantos dias por semana treinar calistenia?
      </h2>

      <p className="mb-4">
        Para iniciantes, 2 a 4 vezes por semana já é suficiente para evoluir. O
        mais importante é manter consistência e respeitar a recuperação.
      </p>

      <p className="mb-4">
        Muitas pessoas começam com um{' '}
        <Link
          href="/blog/treino-em-casa"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino em casa
        </Link>{' '}
        e depois migram para treinos de calistenia mais avançados.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Dicas para evoluir mais rápido na calistenia
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Priorize execução correta</li>
        <li>Não tente movimentos avançados cedo demais</li>
        <li>Treine com consistência</li>
        <li>Fortaleça o core</li>
        <li>Durma e se alimente bem</li>
      </ul>

      {/* 🔥 Links internos finais */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h3 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
          Veja também
        </h3>

        <ul className="space-y-2 text-sm">
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
              href="/blog/treino-full-body"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino full body
            </Link>
          </li>

          <li>
            <Link
              href="/blog/treino-upper-lower"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino upper lower
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Quer um treino personalizado de calistenia?
        </h2>

        <p className="mb-4">
          Responda algumas perguntas rápidas e receba um treino ideal para seu
          nível e objetivo.
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
