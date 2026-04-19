import PerguntasProtocoloPage from './PerguntasProtocoloPage'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crie Seu Treino para Academia em 1 Minuto',
  description:
    'Leva menos de 1 minuto. Responda algumas perguntas e receba um treino completo, adaptado ao seu objetivo e nível. Simples, gratuito e sem cadastro.',
}

export default function Perguntas() {
  return <PerguntasProtocoloPage />
}
