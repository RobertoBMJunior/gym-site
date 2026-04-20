// import { AdSection } from '@/components/sections/AdSection'
import { Benefits } from '@/components/sections/Benefits'
import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorks } from '@/components/sections/HowItWorks'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treino Personalizado em 1 Minuto (Grátis) | Treino Pronto',
  description:
    'Gere um treino personalizado para academia ou calistenia, baseado no seu nível e objetivo. Rápido, gratuito e sem cadastro.',
}

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <HowItWorks />
      {/* <AdSection /> */}
      <Benefits />
    </main>
  )
}
