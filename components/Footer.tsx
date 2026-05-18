import Image from 'next/image'

const WA = 'https://wa.me/5561900000000'

const COLS = [
  {
    title: 'Serviços',
    links: [
      { label: 'Consultoria para a Pessoa', href: '#services' },
      { label: 'Consultoria para o Ambiente', href: '#services' },
      { label: 'Plano Basic', href: '#services' },
      { label: 'Plano Premium', href: '#services' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nossa equipe', href: '#team' },
      { label: 'Manifesto', href: '#manifesto' },
      { label: 'Valores', href: '#values' },
      { label: 'Como funciona', href: '#process' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: '+55 61 9 ···· ····', href: WA, external: true },
      { label: 'Ablewayc@gmail.com', href: 'mailto:Ablewayc@gmail.com' },
      { label: '@ablewayc', href: 'https://instagram.com/ablewayc', external: true },
      { label: 'Brasília, Brasil', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy pt-14 pb-8">
      <div className="max-w-container mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 md:gap-12 pb-12 border-b border-white/[.07]">
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo-mint.svg" width={48} height={48} alt="Ableway" unoptimized />
            <div className="font-syne font-bold text-[20px] text-white mt-3 mb-2">Ableway</div>
            <p className="text-[13px] text-white/[.35] leading-[1.65] m-0">
              Consultoria especializada em mobilidade e acessibilidade. Precisão técnica com
              cuidado humano.
            </p>
          </div>
          {COLS.map(({ title, links }) => (
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
            © 2025 <strong className="text-[rgba(110,211,177,.6)]">Ableway</strong> · Todos os
            direitos reservados
          </div>
          <div className="text-[12px] text-white/20">Brasília, Brasil</div>
        </div>
      </div>
    </footer>
  )
}
