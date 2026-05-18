import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

const WA = 'https://wa.me/5561900000000'

export function CTA() {
  return (
    <section id="cta" className="py-24 bg-mint-lighter border-t border-mint-light">
      <div className="max-w-[640px] mx-auto px-10 text-center">
        <Eyebrow>Comece agora</Eyebrow>
        <h2 className="font-syne text-[clamp(30px,4vw,48px)] font-extrabold text-navy mb-4 leading-[1.1]">
          Pronto para recuperar sua{' '}
          <em className="text-mint-dark not-italic">autonomia?</em>
        </h2>
        <p className="text-[16px] leading-[1.7] mb-9 max-w-[480px] mx-auto">
          Agende sua avaliação — online ou presencial em Brasília. Sem burocracia, só cuidado
          técnico e humano.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button
            href={WA}
            variant="navy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '16px', padding: '15px 30px' }}
          >
            <WhatsAppIcon size={17} />
            Agendar via WhatsApp
          </Button>
          <Button
            href="mailto:Ablewayc@gmail.com"
            variant="outline"
            style={{ fontSize: '16px', padding: '15px 30px' }}
          >
            Enviar e-mail
          </Button>
        </div>
        <p className="text-[12px] text-[rgba(28,49,68,.4)] mt-[18px]">
          Ablewayc@gmail.com · @ablewayc · Brasília, Brasil
        </p>
      </div>
    </section>
  )
}
