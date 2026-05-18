import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'

const WA = 'https://wa.me/5561900000000'

export function Manifesto() {
  return (
    <section id="manifesto" className="py-20 bg-navy">
      <div className="max-w-[760px] mx-auto px-10 text-center">
        <Eyebrow style={{ color: 'rgba(110,211,177,.7)' }}>Nosso manifesto</Eyebrow>
        <blockquote className="not-italic font-syne text-[clamp(24px,3.5vw,38px)] font-bold text-white leading-[1.4] tracking-[-0.015em] mb-6">
          "Acessibilidade não é um detalhe técnico — é um ato de respeito à{' '}
          <em className="text-mint not-italic">sua história.</em>"
        </blockquote>
        <p className="text-[16px] text-white/50 leading-[1.75] mb-9">
          Cada pessoa possui uma biografia única, e sua independência deve ser preservada com
          dignidade. Na Ableway, trabalhamos para que a tecnologia assistiva seja uma ponte, não
          uma barreira.
        </p>
        <Button href={WA} target="_blank" rel="noopener noreferrer">
          Quero conhecer a Ableway
        </Button>
      </div>
    </section>
  )
}
