import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treino para iniciantes na academia | Guia completo',
  description:
    'Aprenda como montar um treino para iniciantes na academia com segurança. Veja exemplos práticos e gere seu treino personalizado.',
  keywords: [
    'treino para iniciantes',
    'treino academia iniciante',
    'como começar academia',
    'treino básico musculação',
  ],
}

export default function TreinoParaIniciantes() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Treino para iniciantes na academia: guia completo para começar certo
      </h1>

      <Image
        src="/images/blog/treino-iniciantes.jpg"
        alt="treino para iniciantes na academia"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />

      <p className="mb-4">
        Se você está começando na academia, é normal ter dúvidas sobre qual
        treino seguir, quais exercícios fazer e quantos dias treinar por semana.
        Neste guia completo de treino para iniciantes, você vai aprender o
        básico para evoluir com segurança e consistência.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Como começar na academia do jeito certo
      </h2>

      <p className="mb-4">
        O erro mais comum de quem está começando é tentar fazer treinos
        avançados logo no início. O ideal é começar com um treino simples,
        focando na execução correta dos exercícios e na adaptação do corpo.
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Treine de 2 a 4 vezes por semana</li>
        <li>Priorize exercícios básicos</li>
        <li>Descanse entre os treinos</li>
        <li>Foque na técnica antes da carga</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Exemplo de treino para iniciantes (corpo inteiro)
      </h2>

      <p className="mb-4">
        Um dos melhores treinos para iniciantes é o treino de corpo inteiro
        (full body), que trabalha todos os grupos musculares na mesma sessão.
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Agachamento – 3x10</li>
        <li>Supino – 3x10</li>
        <li>Puxada na frente – 3x10</li>
        <li>Elevação lateral – 3x12</li>
        <li>Cadeira Flexora – 3x12</li>
        <li>Abdominal – 3x15</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Quantos dias por semana treinar?
      </h2>

      <p className="mb-4">
        Para iniciantes, o ideal é começar com 3 dias por semana. Isso permite
        que o corpo se recupere e evolua sem sobrecarga.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Treino para iniciantes emagrecer ou ganhar massa?
      </h2>

      <p className="mb-4">
        O treino para iniciantes pode servir tanto para emagrecimento quanto
        para ganho de massa muscular. A principal diferença está na alimentação
        e na intensidade do treino.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Dicas importantes para iniciantes
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Não pule o aquecimento</li>
        <li>Evite cargas muito altas no início</li>
        <li>Mantenha consistência</li>
        <li>Durma bem</li>
      </ul>

      {/* CTA */}
      <div className="bg-slate-100 p-6 rounded-lg text-center mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Quer um treino personalizado para você?
        </h2>

        <p className="mb-4">
          Responda algumas perguntas rápidas e gere um treino ideal para o seu
          objetivo.
        </p>

        <Link
          href="/perguntas-protocolo"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
        >
          Gerar meu treino agora
        </Link>
      </div>
    </article>
  )
}
