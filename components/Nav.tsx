import Image from 'next/image'
import { Button } from './ui/Button'
import { FaWhatsapp } from 'react-icons/fa'
import { LangSwitcher } from './LangSwitcher'
import type { NavDict } from '@/dictionaries'
import { WA } from '@/lib/constants'

export function Nav({ dict }: { dict: NavDict }) {
  return (
    <nav className="sticky top-0 z-[100] bg-white/[.94] backdrop-blur-[16px] border-b border-[var(--border)]">
      <div className="max-w-container mx-auto px-10 h-[68px] flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-[11px] no-underline">
          <Image src="/logo-mint.svg" width={36} height={36} alt="Ableway" unoptimized />
          <span className="font-syne font-bold text-[20px] text-navy">Ableway</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {dict.links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[14px] font-medium text-stone hover:text-navy transition-colors duration-[150ms] no-underline"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <Button href={WA} target="_blank" rel="noopener noreferrer" className="rounded-full">
            <FaWhatsapp size={18} />
            {dict.cta}
          </Button>
        </div>
      </div>
    </nav>
  )
}
