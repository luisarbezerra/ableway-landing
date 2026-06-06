import Image from 'next/image'
import { UserCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FaWhatsapp } from 'react-icons/fa'
import type { HeroDict } from '@/dictionaries'
import { WA } from '@/lib/constants'

export function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section
      id="hero"
      className="border-b border-[var(--border)] py-24"
      style={{ background: 'linear-gradient(160deg, #F4FBF8 0%, #fff 55%)' }}
    >
      <div className="max-w-container mx-auto px-10 grid md:grid-cols-[1fr_420px] gap-[72px] items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-mint-light text-mint-dark text-[11px] font-bold tracking-[.18em] uppercase px-[14px] py-[6px] rounded-full mb-7">
            <UserCheck size={13} strokeWidth={2.5} />
            {dict.pill}
          </div>
          <h1 className="font-jakarta font-bold text-[clamp(38px,4.5vw,56px)] tracking-[-0.02em] leading-[1.15] text-navy mb-[22px]">
            {dict.titleBase}{' '}
            <em className="not-italic font-syne font-extrabold text-mint-dark">{dict.titleEm}</em>
            <br />
            {dict.titleSub}
          </h1>
          <p className="text-[18px] text-stone leading-[1.7] mb-9 max-w-[500px]">
            {dict.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button href="#services">
              {dict.btnPrimary}
              <ArrowRight size={16} />
            </Button>
            <Button href="#manifesto" variant="outline">
              {dict.btnSecondary}
            </Button>
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
              <div className="text-[12px] text-stone mt-[3px]">{dict.cardSubtitle}</div>
            </div>
          </div>
          <h3 className="font-syne text-[22px] font-bold text-navy leading-[1.25] mb-[14px]">
            {dict.cardTitle}
          </h3>
          <p className="text-[14px] leading-[1.65] mb-6 whitespace-pre-line">{dict.cardBody}</p>
          <Button
            href={WA}
            variant="navy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center rounded-full"
          >
            <FaWhatsapp size={18} />
            {dict.cardBtn}
          </Button>
        </div>
      </div>
    </section>
  )
}
