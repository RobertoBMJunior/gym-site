import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divisão de treino: como escolher a melhor para seus objetivos?',
  description:
    'Aprenda o que é uma divisão de treino, quais são os principais tipos e descubra qual faz mais sentido para sua rotina.',
  keywords: [
    'divisão de treino',
    'divisão de treino academia',
    'como dividir treino',
    'melhor divisão de treino',
    'treino abc',
    'upper lower',
    'full body',
  ],
}

export default function DivisaoDeTreino() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-3">
        Divisão de treino: como escolher a melhor para seus objetivos
      </h1>

      <p className="text-sm text-slate-500 mb-2">
        Publicado em 28 de junho de 2026
      </p>

      <p className="text-lg text-slate-600 mb-6">
        Descubra como organizar seus treinos durante a semana para melhorar os
        resultados e acelerar sua evolução na academia.
      </p>

      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
        <Image
          src="/images/blog/divisao-de-treino.jpg"
          alt="divisão de treino academia"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-4">
        Uma boa divisão de treino ajuda a distribuir o volume de exercícios ao
        longo da semana, melhora a recuperação muscular e torna a evolução mais
        consistente. Porém, não existe uma única divisão perfeita para todo
        mundo.
      </p>

      <p className="mb-4">
        A melhor escolha depende principalmente da quantidade de dias que você
        consegue treinar, do seu nível de experiência e do seu objetivo.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        O que é uma divisão de treino?
      </h2>

      <p className="mb-4">
        Divisão de treino é a forma como os grupos musculares são organizados ao
        longo da semana. Em vez de treinar o corpo inteiro todos os dias, você
        distribui os músculos entre diferentes sessões.
      </p>

      <p className="mb-4">
        Isso permite controlar melhor o volume de treino, otimizar a recuperação
        e manter uma frequência adequada para cada grupo muscular.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Qual é a melhor divisão de treino?
      </h2>

      <p className="mb-4">
        A resposta depende da frequência semanal. Veja um resumo:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>2 a 3 dias por semana → Full Body</li>
        <li>4 dias por semana → Upper Lower</li>
        <li>5 ou mais dias → ABC ou outras divisões avançadas</li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h3 className="font-semibold mb-2">Dica importante</h3>

        <p>
          A melhor divisão não é necessariamente a mais complexa, e sim aquela
          que você consegue seguir durante meses com consistência.
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Divisão Full Body</h2>

      <p className="mb-4">
        O{' '}
        <Link
          href="/blog/treino-full-body"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino Full Body
        </Link>{' '}
        trabalha todos os grupos musculares em cada sessão. É uma das melhores
        opções para quem treina apenas duas ou três vezes por semana e também
        para iniciantes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Divisão Upper Lower</h2>

      <p className="mb-4">
        O{' '}
        <Link
          href="/blog/treino-upper-lower"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino Upper Lower
        </Link>{' '}
        divide o corpo entre membros superiores e inferiores. Geralmente é
        utilizado por quem treina quatro vezes por semana e busca uma ótima
        combinação entre frequência e recuperação.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Divisão ABC</h2>

      <p className="mb-4">
        O{' '}
        <Link
          href="/blog/treino-abc"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino ABC
        </Link>{' '}
        costuma ser indicado para pessoas que treinam cinco ou mais dias por
        semana, permitindo aumentar o volume de treino em cada grupo muscular.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Como escolher sua divisão?
      </h2>

      <p className="mb-4">
        Antes de pensar na divisão ideal, responda três perguntas:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Quantos dias você consegue treinar?</li>
        <li>Você é iniciante ou já possui experiência?</li>
        <li>Seu foco é hipertrofia, emagrecimento ou condicionamento?</li>
      </ul>

      <p className="mb-4">
        Se você ainda está começando, vale conferir nosso guia de{' '}
        <Link
          href="/blog/treino-para-iniciantes"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para iniciantes
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Divisão de treino influencia na hipertrofia?
      </h2>

      <p className="mb-4">
        Sim, mas ela é apenas uma parte do processo. Para ganhar massa muscular,
        também é necessário treinar com intensidade adequada, alimentar-se bem,
        dormir o suficiente e manter constância.
      </p>

      <p className="mb-4">
        Se esse é seu objetivo, recomendamos também os artigos sobre{' '}
        <Link
          href="/blog/hipertrofia"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          hipertrofia
        </Link>{' '}
        e{' '}
        <Link
          href="/blog/como-ganhar-massa-muscular"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          como ganhar massa muscular
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Erros comuns ao escolher uma divisão
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Copiar o treino de atletas avançados.</li>
        <li>Treinar mais dias do que consegue manter.</li>
        <li>Trocar de divisão toda semana.</li>
        <li>Ignorar a recuperação muscular.</li>
        <li>Achar que uma divisão faz milagres sozinha.</li>
      </ul>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
        <h3 className="font-semibold mb-2">Resumindo</h3>

        <p>
          Se você treina poucas vezes na semana, prefira Full Body. Se consegue
          treinar quatro dias, Upper Lower costuma ser uma excelente escolha. Já
          quem possui maior disponibilidade pode utilizar divisões como ABC,
          desde que consiga manter boa recuperação.
        </p>
      </div>

      {/* Links internos */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h3 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
          Veja também
        </h3>

        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/blog/treino-full-body"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Treino Full Body
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

          <li>
            <Link
              href="/blog/hipertrofia"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Hipertrofia
            </Link>
          </li>

          <li>
            <Link
              href="/blog/como-ganhar-massa-muscular"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Como ganhar massa muscular
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Descubra qual divisão de treino é ideal para você
        </h2>

        <p className="mb-4">
          Responda algumas perguntas e receba uma divisão personalizada conforme
          sua rotina, experiência e objetivo.
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
