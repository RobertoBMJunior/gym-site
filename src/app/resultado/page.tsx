import type { Metadata } from 'next'
import ResultPage from './ResultPage'

export const metadata: Metadata = {
  title: 'Sua Ficha de Treino para Academia Está Pronta',
  description:
    'Seu treino para academia está pronto! Veja os exercícios, siga o plano e comece hoje mesmo. Simples, direto e eficaz.',
}

export default function Result() {
  return <ResultPage />
}
