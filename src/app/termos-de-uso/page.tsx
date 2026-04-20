import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Leia os termos de uso do Treino Pronto e conheça as regras, responsabilidades e condições para utilização do site.',
}

export default function TermosDeUso() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-3xl font-bold mb-2">Termos de Uso</h1>

      <p className="mb-10 text-sm text-slate-500">
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </p>

      <div className="space-y-4 leading-relaxed">
        <p>
          Ao acessar e utilizar este site, você concorda com os presentes Termos
          de Uso. Caso não concorde com alguma das condições, recomendamos que
          não utilize a plataforma.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Uso do site</h2>
        <p>
          Este site tem como objetivo fornecer sugestões automatizadas de
          treinos físicos com base nas informações fornecidas pelo usuário, sem
          substituir orientação profissional.
        </p>
        <p>
          O uso das informações disponibilizadas é de responsabilidade exclusiva
          do usuário.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          2. Responsabilidade e saúde
        </h2>
        <p>
          Os treinos sugeridos não constituem aconselhamento profissional
          individualizado e não substituem a orientação de um profissional de
          educação física ou médico.
        </p>
        <p>
          Antes de iniciar qualquer programa de exercícios, recomenda-se
          consultar um profissional qualificado, especialmente em caso de
          condições de saúde pré-existentes.
        </p>
        <p>
          O uso inadequado dos exercícios pode resultar em lesões, sendo de
          total responsabilidade do usuário a execução correta e segura.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          3. Limitação de responsabilidade
        </h2>
        <p>
          Não nos responsabilizamos por quaisquer danos, lesões ou prejuízos
          decorrentes do uso das informações disponibilizadas neste site,
          incluindo a execução inadequada dos exercícios sugeridos.
        </p>
        <p>
          O conteúdo é fornecido sem garantias de qualquer tipo e não assegura
          resultados específicos. O uso das informações é feito por conta e
          risco do usuário.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Propriedade intelectual
        </h2>
        <p>
          Todo o conteúdo deste site, incluindo textos, estrutura, design e
          funcionalidades, é protegido por direitos autorais.
        </p>
        <p>
          Não é permitido copiar, reproduzir ou distribuir qualquer conteúdo sem
          autorização prévia. O uso indevido do conteúdo poderá resultar em
          medidas legais.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          5. Publicidade e terceiros
        </h2>
        <p>
          Este site poderá exibir anúncios por meio de plataformas de terceiros,
          como o Google AdSense.
        </p>
        <p>
          Esses serviços podem utilizar cookies e coletar dados para exibir
          anúncios mais relevantes ao usuário.
        </p>
        <p>Não temos controle sobre o conteúdo exibido por terceiros.</p>

        <h2 className="text-xl font-semibold mt-6">
          6. Modificações no serviço
        </h2>
        <p>
          Podemos modificar, suspender ou descontinuar qualquer parte do site a
          qualquer momento, sem aviso prévio.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Alterações nos termos</h2>
        <p>
          Estes Termos de Uso podem ser atualizados periodicamente. Recomendamos
          que você revise esta página regularmente.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Legislação aplicável</h2>
        <p>
          Estes termos são regidos pelas leis vigentes no Brasil, em especial a
          Lei Geral de Proteção de Dados (LGPD), quando aplicável.
        </p>

        <h2 className="text-xl font-semibold mt-6">9. Contato</h2>
        <p>
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco
          pelo e-mail: treinopronto@gmail.com.
        </p>
      </div>
    </section>
  )
}
