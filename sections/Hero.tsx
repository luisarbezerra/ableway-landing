import Image from 'next/image'
import { MapPin, User } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

const WA = 'https://wa.me/5561900000000'

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-[var(--border)]"
      style={{ background: 'linear-gradient(160deg, #F4FBF8 0%, #fff 55%)', padding: '88px 0 96px' }}
    >
      <div className="max-w-container mx-auto px-10 grid md:grid-cols-[1fr_420px] gap-[72px] items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-mint-light text-mint-dark text-[11px] font-bold tracking-[.18em] uppercase px-[14px] py-[6px] rounded-full mb-7">
            <MapPin size={12} strokeWidth={2.5} />
            Brasília · Online e Presencial
          </div>
          <h1 className="font-jakarta font-bold text-[clamp(38px,4.5vw,56px)] tracking-[-0.02em] leading-[1.15] text-navy mb-[22px]">
            Mobilidade é{' '}
            <em className="not-italic font-syne font-extrabold text-mint-dark">liberdade.</em>
            <br />
            Autonomia é seu direito.
          </h1>
          <p className="text-[18px] text-stone leading-[1.7] mb-9 max-w-[500px]">
            Consultoria especializada em tecnologias assistivas e ambientes acessíveis. Precisão
            clínica com olhar humano — para que você ocupe o mundo com confiança.
          </p>
          <div className="flex gap-3 flex-wrap mb-12">
            <Button href={WA} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              Agendar via WhatsApp
            </Button>
            <Button href="#services" variant="outline">
              Ver serviços
            </Button>
          </div>
          <div className="flex items-center gap-3 pt-9 border-t border-[var(--border)]">
            <div className="flex">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-[34px] h-[34px] rounded-full bg-mint-light border-2 border-white flex items-center justify-center"
                  style={{ marginLeft: i === 0 ? 0 : '-8px' }}
                >
                  <User size={16} stroke="#44B893" strokeWidth={2} />
                </div>
              ))}
            </div>
            <p className="text-[13px] text-stone m-0" style={{ lineHeight: 1 }}>
              <strong className="text-navy">+40 anos</strong> de experiência clínica combinada ·{' '}
              <strong className="text-navy">Rede Sarah</strong> ·{' '}
              <strong className="text-navy">Seleção Brasileira</strong>
            </p>
          </div>
        </div>

        {/* Right card (hidden on mobile) */}
        <div
          className="hidden md:block bg-white border border-[var(--border)] rounded-[20px] p-10"
          style={{ boxShadow: '0 4px 32px rgba(28,49,68,.07)' }}
        >
          <div className="flex items-center gap-[14px] mb-7 pb-6 border-b border-[var(--border)]">
            <Image src="/logo-mint.svg" width={44} height={44} alt="Ableway" unoptimized />
            <div>
              <div className="font-syne font-bold text-[18px] text-navy">Ableway</div>
              <div className="text-[12px] text-stone mt-[3px]">
                Consultoria de Acessibilidade e Mobilidade
              </div>
            </div>
          </div>
          <h3 className="font-syne text-[22px] font-bold text-navy leading-[1.25] mb-[14px]">
            Sua avaliação começa com uma conversa.
          </h3>
          <p className="text-[14px] leading-[1.65] mb-6">
            Online ou presencial em Brasília. Sem formulários longos — só atenção especializada
            para o que você realmente precisa.
          </p>
          <Button
            href={WA}
            variant="navy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center"
          >
            <WhatsAppIcon size={15} />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
