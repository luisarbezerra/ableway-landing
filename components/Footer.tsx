import Image from 'next/image'
import type { FooterDict } from '@/dictionaries'

export function Footer({ dict }: { dict: FooterDict }) {
  const [before, after] = dict.copyright.split('Ableway')
  return (
    <footer className="bg-navy pt-14 pb-8">
      <div className="max-w-container mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 md:gap-12 pb-12 border-b border-white/[.07]">
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo-mint.svg" width={48} height={48} alt="Ableway" unoptimized />
            <div className="font-syne font-bold text-[20px] text-white mt-3 mb-2">Ableway</div>
            <p className="text-[13px] text-white/[.35] leading-[1.65] m-0">{dict.tagline}</p>
          </div>
          {dict.cols.map(({ title, links }) => (
            <div key={title}>
              <div className="text-[10px] font-bold tracking-[.18em] uppercase text-white/30 mb-4">
                {title}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-[10px]">
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[13px] text-white/[.45] no-underline transition-colors duration-[150ms] hover:text-mint"
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
          <div className="text-[12px] text-white/20">
            {before}
            <strong className="text-[rgba(110,211,177,.6)]">Ableway</strong>
            {after}
          </div>
          <div className="text-[12px] text-white/20">Brasília, Brasil</div>
        </div>
      </div>
    </footer>
  )
}
