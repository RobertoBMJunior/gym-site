import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HIIT: o que é, benefícios e como fazer corretamente',
  description:
    'Aprenda o que é HIIT, como funciona o treino intervalado de alta intensidade e quando ele pode ajudar no emagrecimento.',
  keywords: [
    'hiit',
    'treino hiit',
    'hiit para emagrecer',
    'treino intervalado de alta intensidade',
    'como fazer hiit',
    'benefícios do hiit',
  ],
}

export default function HIIT() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-3">
        HIIT: o que é e como usar para acelerar seus resultados
      </h1>

      <p className="text-sm text-slate-500 mb-2">
        Publicado em 23 de junho de 2026
      </p>

      <p className="text-lg text-slate-600 mb-6">
        Entenda quando a intensidade nos treinos pode acelerar o gasto calórico,
        melhorar o condicionamento físico e otimizar seu tempo.
      </p>

      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
        <Image
          src="/images/blog/hiit.jpg"
          alt="treino hiit alta intensidade"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-4">
        O HIIT (High Intensity Interval Training) é um método de treinamento
        baseado na alternância entre períodos curtos de esforço intenso e
        momentos de recuperação. Ele ficou popular por oferecer sessões rápidas
        e eficientes, principalmente para quem busca melhorar o condicionamento
        físico e auxiliar no processo de emagrecimento.
      </p>

      <p className="mb-4">
        Diferente dos exercícios aeróbicos tradicionais feitos em ritmo
        constante, o HIIT trabalha com picos de intensidade elevados, exigindo
        mais do sistema cardiovascular e muscular.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">O que é HIIT?</h2>

      <p className="mb-4">
        O HIIT consiste em realizar exercícios intensos por um curto período,
        seguidos de uma pausa ativa ou descanso. Um exemplo simples seria correr
        o mais rápido possível durante 30 segundos e caminhar por 60 segundos,
        repetindo esse ciclo diversas vezes.
      </p>

      <p className="mb-4">
        O objetivo é elevar bastante a frequência cardíaca durante os intervalos
        de esforço, aumentando a demanda energética da sessão.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Principais benefícios do HIIT
      </h2>

      <ul className="list-disc pl-6 mb-4">
        <li>Treinos mais curtos e eficientes</li>
        <li>Melhora do condicionamento cardiovascular</li>
        <li>Alto gasto calórico em pouco tempo</li>
        <li>Maior praticidade para quem tem rotina corrida</li>
        <li>Pode ser feito com ou sem equipamentos</li>
      </ul>

      <p className="mb-4">
        Por isso, o HIIT costuma ser uma estratégia interessante para pessoas
        que possuem pouco tempo disponível para treinar durante a semana.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        HIIT realmente ajuda a emagrecer?
      </h2>

      <p className="mb-4">
        Sim, o HIIT pode contribuir para o emagrecimento quando combinado com
        uma alimentação adequada e consistência nos treinos.
      </p>

      <p className="mb-4">
        Entretanto, é importante entender que nenhum treino sozinho causa perda
        de gordura. O resultado depende principalmente do balanço energético ao
        longo do tempo.
      </p>

      <p className="mb-4">
        Se esse é seu objetivo principal, vale conferir também nosso guia sobre{' '}
        <Link
          href="/blog/treino-para-emagrecer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino para emagrecer
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        HIIT ou musculação: qual é melhor?
      </h2>

      <p className="mb-4">
        Essa não é uma disputa. Na verdade, os dois métodos podem funcionar
        muito bem juntos.
      </p>

      <p className="mb-4">
        Enquanto o HIIT ajuda no condicionamento físico e no gasto calórico, a
        musculação é fundamental para desenvolver força e preservar massa
        muscular.
      </p>

      <p className="mb-4">
        Para quem busca melhorar a composição corporal, normalmente a melhor
        estratégia é combinar musculação com sessões ocasionais de HIIT.
      </p>

      <p className="mb-4">
        Inclusive, se seu foco for aumentar a massa muscular, vale ler nosso
        artigo sobre{' '}
        <Link
          href="/blog/como-ganhar-massa-muscular"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          como ganhar massa muscular
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Exemplo de treino HIIT para iniciantes
      </h2>

      <p className="mb-4">Um protocolo simples para iniciantes pode ser:</p>

      <ul className="list-disc pl-6 mb-4">
        <li>30 segundos de corrida intensa</li>
        <li>60 segundos de caminhada</li>
        <li>Repetir por 10 a 15 minutos</li>
      </ul>

      <p className="mb-4">
        Outra opção é utilizar exercícios com o peso do corpo:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Polichinelos</li>
        <li>Corrida parada</li>
        <li>Agachamentos</li>
        <li>Mountain climbers</li>
      </ul>

      <p className="mb-4">
        Se você prefere treinar sem academia, também pode combinar o HIIT com um{' '}
        <Link
          href="/blog/calistenia"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino de calistenia
        </Link>{' '}
        ou um{' '}
        <Link
          href="/blog/treino-em-casa"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          treino em casa
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Quantas vezes por semana fazer HIIT?
      </h2>

      <p className="mb-4">
        Para a maioria das pessoas, de 2 a 4 sessões semanais já são
        suficientes. Como é um método intenso, mais nem sempre significa melhor.
      </p>

      <p className="mb-4">
        O corpo precisa de recuperação adequada para continuar evoluindo e
        evitar excesso de fadiga.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Erros comuns ao fazer HIIT
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Fazer HIIT todos os dias</li>
        <li>Ignorar o aquecimento</li>
        <li>Executar os exercícios com técnica ruim</li>
        <li>Treinar sempre na intensidade máxima</li>
        <li>Negligenciar recuperação e sono</li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h3 className="font-semibold mb-2">
          Quando o HIIT pode não ser a melhor escolha?
        </h3>

        <p>
          Iniciantes sedentários, pessoas com limitações cardiovasculares ou
          indivíduos retornando após longos períodos sem treinar podem se
          beneficiar de uma adaptação gradual antes de iniciar protocolos de
          alta intensidade.
        </p>
      </div>

      {/* 🔥 Links internos finais */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h3 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
          Veja também
        </h3>

        <ul className="space-y-2 text-sm">
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
              href="/blog/calistenia"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Calistenia para iniciantes
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
          Quer um treino ideal para seu objetivo?
        </h2>

        <p className="mb-4">
          Responda algumas perguntas rápidas e receba um treino personalizado de
          acordo com seu nível, frequência e objetivo.
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
