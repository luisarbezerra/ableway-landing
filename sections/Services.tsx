import { ElementType } from 'react'
import { User, Home, Check } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { ServicesDict } from '@/dictionaries'

function CheckItem({ children, light }: { children: string; light?: boolean }) {
  return (
    <li className="flex items-start gap-[10px] text-[13px] leading-[1.55]">
      <div
        className={`w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px] ${
          light ? 'bg-white/15' : 'bg-mint-light'
        }`}
      >
        <Check size={10} stroke={light ? '#6ED3B1' : '#44B893'} strokeWidth={3} />
      </div>
      <span className={light ? 'text-white/80' : 'text-navy'}>{children}</span>
    </li>
  )
}

function ServiceCard({
  premium,
  desc,
  features,
  labelBasic,
  labelPremium,
}: {
  premium?: boolean
  title: string
  desc: string
  features: string[]
  labelBasic: string
  labelPremium: string
}) {
  if (premium) {
    return (
      <div className="relative rounded-[20px] overflow-visible border-2 border-mint bg-white flex flex-col transition-shadow duration-[150ms] hover:shadow-[0_4px_20px_rgba(28,49,68,.12)]">
        {/* Badge */}
        <div className="absolute -top-3 right-5 bg-navy text-white text-[10px] font-bold tracking-[.15em] uppercase px-3 py-[5px] rounded-full">
          Mais completo
        </div>
        {/* Header */}
        <div className="px-7 pt-7 pb-6 border-b border-[var(--border)]">
          <span className="inline-block text-[10px] font-bold tracking-[.18em] uppercase px-3 py-[5px] rounded-full bg-navy/10 text-navy mb-4">
            {labelPremium}
          </span>
          <p className="text-[13px] leading-[1.65] text-stone m-0">{desc}</p>
        </div>
        {/* Features */}
        <div className="px-7 py-7 flex-1">
          <ul className="list-none flex flex-col gap-[11px] p-0 m-0">
            {features.map((f) => (
              <CheckItem key={f}>{f}</CheckItem>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-[20px] overflow-hidden border border-[var(--border)] bg-white flex flex-col transition-shadow duration-[150ms] hover:shadow-[0_4px_20px_rgba(28,49,68,.06)]">
      {/* Header */}
      <div className="px-7 pt-7 pb-6 border-b border-[var(--border)]">
        <span className="inline-block text-[10px] font-bold tracking-[.18em] uppercase px-3 py-[5px] rounded-full bg-warm text-stone mb-4">
          {labelBasic}
        </span>
        <p className="text-[13px] leading-[1.65] text-stone m-0">{desc}</p>
      </div>
      {/* Features */}
      <div className="px-7 py-7 flex-1">
        <ul className="list-none flex flex-col gap-[11px] p-0 m-0">
          {features.map((f) => (
            <CheckItem key={f}>{f}</CheckItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

const PILLAR_ICONS: ElementType[] = [User, Home]

export function Services({ dict }: { dict: ServicesDict }) {
  return (
    <section id="services" className="py-24 bg-warm">
      <div className="max-w-container mx-auto px-10">
        <div className="text-center mb-14">
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <h2 className="font-syne text-[clamp(28px,3vw,42px)] font-bold text-navy mb-3 leading-[1.15]">
            {dict.headingLine1}
            <br />
            {dict.headingLine2}
          </h2>
          <p className="text-[16px] max-w-[520px] mx-auto">{dict.body}</p>
        </div>
        {dict.pillars.map(({ title, desc, cards }, i) => {
          const Icon = PILLAR_ICONS[i]
          return (
            <div key={title} className="mb-14 last:mb-0">
              <div className="flex items-center gap-[10px] font-syne text-[18px] font-bold text-navy mb-2">
                <Icon size={20} stroke="#6ED3B1" strokeWidth={2} />
                {title}
              </div>
              <p className="text-[14px] mb-6 text-stone">{desc}</p>
              <div className="grid sm:grid-cols-2 gap-5 items-start overflow-visible pt-3">
                {cards.map((card, j) => (
                  <ServiceCard
                    key={card.title}
                    {...card}
                    premium={j === 1}
                    labelBasic={dict.labelBasic}
                    labelPremium={dict.labelPremium}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
