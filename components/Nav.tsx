import Image from 'next/image'
import { Button } from './ui/Button'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

const WA = 'https://wa.me/5561900000000'

export function Nav() {
  return (
    <nav className="sticky top-0 z-[100] bg-white/[.94] backdrop-blur-[16px] border-b border-[var(--border)]">
      <div className="max-w-container mx-auto px-10 h-[68px] flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-[11px] no-underline">
          <Image src="/logo-mint.svg" width={36} height={36} alt="Ableway" unoptimized />
          <span className="font-syne font-bold text-[20px] text-navy">Ableway</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          <a href="#problem" className="text-[14px] font-medium text-stone hover:text-navy transition-colors duration-[150ms] no-underline">Por que Ableway</a>
          <a href="#services" className="text-[14px] font-medium text-stone hover:text-navy transition-colors duration-[150ms] no-underline">Serviços</a>
          <a href="#team" className="text-[14px] font-medium text-stone hover:text-navy transition-colors duration-[150ms] no-underline">Equipe</a>
          <a href="#cta" className="text-[14px] font-medium text-stone hover:text-navy transition-colors duration-[150ms] no-underline">Contato</a>
        </div>
        <Button href={WA} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={15} />
          Agendar avaliação
        </Button>
      </div>
    </nav>
  )
}
