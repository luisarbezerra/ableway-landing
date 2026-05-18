import { Hero } from '@/sections/Hero'
import { TrustBar } from '@/sections/TrustBar'
import { Problem } from '@/sections/Problem'
import { Services } from '@/sections/Services'
import { Process } from '@/sections/Process'
import { Team } from '@/sections/Team'
import { Manifesto } from '@/sections/Manifesto'
import { Values } from '@/sections/Values'
import { CTA } from '@/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Problem />
      <Services />
      <Process />
      <Team />
      <Manifesto />
      <Values />
      <CTA />
    </main>
  )
}
