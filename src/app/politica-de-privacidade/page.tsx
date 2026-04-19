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

      <section className="space-y-4">
        <p>
          A sua privacidade é importante para nós. Esta Política de Privacidade
          descreve como coletamos, usamos e protegemos suas informações ao
          utilizar nosso site.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Informações coletadas</h2>
        <p>Podemos coletar as seguintes informações fornecidas por você:</p>
        <ul className="list-disc pl-6">
          <li>Idade</li>
          <li>Gênero</li>
          <li>Objetivos de treino</li>
          <li>Frequência de treino</li>
          <li>Preferências relacionadas à atividade física</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">2. Uso das informações</h2>
        <p>As informações coletadas são utilizadas para:</p>
        <ul className="list-disc pl-6">
          <li>Gerar planos de treino personalizados</li>
          <li>Melhorar a experiência do usuário</li>
          <li>Analisar o uso do site</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          3. Cookies e tecnologias semelhantes
        </h2>
        <p>
          Utilizamos cookies para melhorar sua experiência. Cookies são pequenos
          arquivos armazenados no seu dispositivo.
        </p>
        <p>
          Você pode, a qualquer momento, configurar seu navegador para recusar
          cookies ou removê-los. No entanto, isso pode afetar algumas
          funcionalidades do site.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Publicidade e terceiros
        </h2>
        <p>
          Podemos utilizar serviços de terceiros, como o Google AdSense, que
          utilizam cookies para exibir anúncios personalizados com base nas suas
          visitas a este e a outros sites.
        </p>
        <p>
          O Google pode usar cookies para exibir anúncios personalizados com
          base nos seus interesses. Você pode desativar a publicidade
          personalizada acessando as configurações de anúncios do Google.
        </p>

        <p>
          Para mais informações, consulte a política de privacidade do Google.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          5. Compartilhamento de dados
        </h2>
        <p>
          Não vendemos suas informações pessoais. Podemos compartilhar dados
          apenas com serviços necessários para funcionamento do site, como
          ferramentas de análise e publicidade.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Segurança</h2>
        <p>
          Adotamos medidas para proteger suas informações, mas nenhum sistema é
          totalmente seguro. Recomendamos que você também proteja seus dados.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Seus direitos</h2>
        <p>
          Mesmo que não armazenemos suas informações pessoais em banco de dados,
          você tem direito a entender como seus dados são utilizados.
        </p>
        <p>
          Caso utilize serviços de terceiros (como ferramentas de análise ou
          anúncios), esses serviços podem coletar dados diretamente. Nesses
          casos, recomendamos consultar as políticas de privacidade desses
          provedores.
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
      </section>
    </section>
  )
}
