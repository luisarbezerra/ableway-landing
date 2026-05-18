import { getDictionary, LOCALES } from '@/dictionaries'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { TrustBar } from '@/sections/TrustBar'
import { Problem } from '@/sections/Problem'
import { Services } from '@/sections/Services'
import { Process } from '@/sections/Process'
import { Team } from '@/sections/Team'
import { Manifesto } from '@/sections/Manifesto'
import { Values } from '@/sections/Values'
import { CTA } from '@/sections/CTA'

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)
  return { title: dict.meta.title, description: dict.meta.description }
}

export default async function LangPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)
  return (
    <>
      <Nav dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <TrustBar dict={dict.trustBar} />
        <Problem dict={dict.problem} />
        <Services dict={dict.services} />
        <Process dict={dict.process} />
        <Team dict={dict.team} />
        <Manifesto dict={dict.manifesto} />
        <Values dict={dict.values} />
        <CTA dict={dict.cta} />
      </main>
      <Footer dict={dict.footer} />
    </>
  )
}
