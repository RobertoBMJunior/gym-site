import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treino Full Body: como funciona e para quem é ideal',
  description:
    'Aprenda como funciona o treino full body, ideal para quem treina 2 a 3 vezes por semana. Veja como montar e evoluir.',
  keywords: [
    'treino full body',
    'full body academia',
    'treino corpo inteiro',
    'full body 3 vezes por semana',
    'treino para iniciantes academia',
  ],
}

export default function TreinoFullBody() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Treino Full Body: como funciona e para quem é ideal
      </h1>

      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
        <Image
          src="/images/blog/treino-full-body.jpg"
          alt="treino full body academia corpo inteiro"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-4">
        O treino Full Body (corpo inteiro) é uma das formas mais eficientes de
        treinar, principalmente para quem vai poucas vezes na academia. Nesse
        modelo, você trabalha todos os grupos musculares na mesma sessão.
      </p>

      <p className="mb-4">
        Ele é muito utilizado por quem está começando, mas também pode ser
        extremamente eficaz para praticantes mais avançados, dependendo de como
        o treino é estruturado.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Para quem o treino Full Body é indicado?
      </h2>

      <p className="mb-4">
        O Full Body é ideal para quem treina de 2 a 3 vezes por semana. Isso
        porque cada treino já estimula o corpo inteiro, garantindo uma boa
        frequência muscular mesmo com menos dias de treino.
      </p>

      <p className="mb-4">
        Se você está começando, esse é provavelmente o melhor ponto de partida.
        Inclusive, muitos programas de{' '}
        <Link
          href="/blog/treino-para-iniciantes"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para iniciantes
        </Link>{' '}
        utilizam esse modelo justamente pela simplicidade e eficiência.
      </p>

      <p className="mb-4">
        Já para quem treina mais vezes na semana, pode fazer mais sentido migrar
        para divisões como o{' '}
        <Link
          href="/blog/treino-upper-lower"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino upper lower
        </Link>{' '}
        ou o{' '}
        <Link
          href="/blog/treino-abc"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino ABC
        </Link>
        , que permitem maior volume por grupo muscular.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Full Body é só para iniciantes?
      </h2>

      <p className="mb-4">
        Não. Apesar de ser muito popular entre iniciantes, o Full Body também
        pode ser usado por praticantes intermediários e avançados.
      </p>

      <p className="mb-4">
        A diferença está na intensidade e na escolha dos exercícios. Um
        iniciante vai focar em movimentos básicos e adaptação, enquanto um
        avançado pode usar cargas mais altas, técnicas intensificadoras e menor
        volume por sessão.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Exemplo de treino Full Body
      </h2>

      <p className="mb-4">
        Veja um exemplo simples de treino Full Body que pode ser feito 2 a 3
        vezes por semana:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Agachamento (Livre ou Hack) – 3x8–10</li>
        <li>Supino Reto – 3x8–10</li>
        <li>Puxada na Frente – 3x10</li>
        <li>Stiff ou RDL – 3x10–12</li>
        <li>Remada Baixa ou Curvada – 3x10</li>
        <li>Elevação Lateral ou Desenvolvimento – 3x12</li>
        <li>Abdominal (Opcional) – 3x15</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Full Body para emagrecer
      </h2>

      <p className="mb-4">
        O treino Full Body também é uma excelente opção para quem busca{' '}
        <Link
          href="/blog/treino-para-emagrecer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          emagrecimento
        </Link>
        , já que envolve muitos músculos ao mesmo tempo, aumentando o gasto
        calórico da sessão.
      </p>

      <p className="mb-4">
        Ele pode ser combinado com exercícios cardiovasculares ou até com
        treinos mais intensos, como circuitos e HIIT.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treinar em casa com Full Body funciona?
      </h2>

      <p className="mb-4">
        Sim. O Full Body é uma das melhores opções para quem prefere treinar em
        casa, já que não depende de muitos equipamentos. Com exercícios básicos,
        já é possível ter bons resultados.
      </p>

      <p className="mb-4">
        Se esse é o seu caso, vale conferir também um{' '}
        <Link
          href="/blog/treino-em-casa"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino em casa
        </Link>{' '}
        adaptado para sua rotina.
      </p>

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
              href="/blog/treino-upper-lower"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino Upper Lower
            </Link>
          </li>

          <li>
            <Link
              href="/blog/treino-abc"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino ABC
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Quer um treino ideal para sua rotina?
        </h2>

        <p className="mb-4">
          Responda algumas perguntas rápidas e receba um treino personalizado de
          acordo com seu nível e frequência.
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
