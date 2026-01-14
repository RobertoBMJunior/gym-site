import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HowItWorks />
    </div>
  )
}
