import { Benefits } from '@/components/sections/Benefits'
import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorks } from '@/components/sections/HowItWorks'

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HowItWorks />
      <Benefits />
    </div>
  )
}
