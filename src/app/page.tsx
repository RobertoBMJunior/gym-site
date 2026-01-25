import { AdSection } from '@/components/sections/AdSection'
import { Benefits } from '@/components/sections/Benefits'
import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorks } from '@/components/sections/HowItWorks'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <HowItWorks />
      <AdSection />
      <Benefits />
    </main>
  )
}
