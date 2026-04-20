import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como o Treino Pronto coleta, utiliza e protege suas informações ao utilizar a plataforma.',
}

export default function PoliticaDePrivacidade() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>

      <p className="mb-4 text-sm text-slate-500">
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </p>

      <div className="space-y-4 leading-relaxed">
        <p>
          A sua privacidade é importante para nós. Esta Política de Privacidade
          descreve como coletamos, usamos e protegemos suas informações ao
          utilizar nosso site.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          1. Informações fornecidas
        </h2>
        <p>
          Podemos receber as seguintes informações fornecidas por você durante o
          uso do questionário:
        </p>
        <ul className="list-disc pl-6">
          <li>Idade</li>
          <li>Gênero</li>
          <li>Objetivos de treino</li>
          <li>Frequência de treino</li>
          <li>Preferências relacionadas à atividade física</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">2. Uso das informações</h2>
        <p>
          As informações fornecidas por você são utilizadas unicamente para:
        </p>
        <ul className="list-disc pl-6">
          <li>Gerar planos de treino personalizados</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          3. Cookies e tecnologias semelhantes
        </h2>
        <p>
          Atualmente, este site não utiliza cookies próprios para coleta de
          dados.
        </p>
        <p>
          No entanto, no futuro, serviços de terceiros (como plataformas de
          análise ou publicidade) poderão utilizar cookies para melhorar a
          experiência do usuário e exibir conteúdos relevantes. Caso isso
          ocorra, esta política será atualizada.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Publicidade e terceiros
        </h2>
        <p>
          Este site poderá utilizar serviços de terceiros, como o Google
          AdSense, que utilizam cookies para exibir anúncios personalizados com
          base nas visitas dos usuários.
        </p>
        <p>
          Esses serviços podem coletar informações de navegação para oferecer
          anúncios mais relevantes.
        </p>

        <p>
          Para mais informações, consulte a política de privacidade do Google.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          5. Compartilhamento de dados
        </h2>
        <p>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais com
          terceiros. As informações fornecidas no questionário são utilizadas
          apenas para gerar o resultado exibido ao usuário e não são armazenadas
          ou compartilhadas.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger as
          informações dos usuários. As respostas fornecidas no questionário não
          são armazenadas em banco de dados, sendo utilizadas apenas durante a
          sessão para gerar o resultado exibido.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Seus direitos</h2>
        <p>
          Como não armazenamos dados pessoais em banco de dados, não mantemos
          registros que possam ser acessados, corrigidos ou excluídos
          posteriormente.
        </p>
        <p>
          As informações fornecidas no questionário são utilizadas apenas
          durante a navegação para gerar o resultado exibido ao usuário. Caso o
          site passe a utilizar serviços de terceiros (como ferramentas de
          análise ou publicidade), esses serviços poderão coletar dados
          diretamente. Nesses casos, recomendamos consultar as políticas de
          privacidade dos respectivos provedores.
        </p>
        <p>
          Você também pode gerenciar o uso de cookies diretamente no seu
          navegador.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          8. Alterações nesta política
        </h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente.
          Recomendamos que você revise esta página regularmente.
        </p>

        <h2 className="text-xl font-semibold mt-6">9. Contato</h2>
        <p>
          Em caso de dúvidas sobre esta Política de Privacidade, entre em
          contato conosco pelo e-mail: treinopronto@gmail.com
        </p>
      </div>
    </section>
  )
}
