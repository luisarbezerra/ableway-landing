'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { FaWhatsapp } from 'react-icons/fa'
import { LangSwitcher } from './LangSwitcher'
import type { NavDict } from '@/dictionaries'

export function Nav({ dict, waHref }: { dict: NavDict; waHref: string }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[100] bg-white/[.94] backdrop-blur-[16px] border-b border-[var(--border)]">
      <div className="max-w-container mx-auto px-10 h-[68px] flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-[11px] no-underline">
          <Image src="/logo-mint.svg" width={36} height={36} alt="Ableway" unoptimized />
          <span className="font-syne font-bold text-[20px] text-navy">Ableway</span>
        </a>

        {/* Desktop links */}
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
          {/* Desktop CTA */}
          <Button href={waHref} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
            <FaWhatsapp size={18} />
            {dict.cta}
          </Button>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-navy hover:bg-mint-light transition-colors duration-[150ms]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-8 pt-5 pb-7 flex flex-col gap-1">
          {dict.links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-stone hover:text-navy py-[10px] no-underline transition-colors duration-[150ms] border-b border-[var(--border)] last:border-0"
            >
              {label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              <FaWhatsapp size={18} />
              {dict.cta}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
