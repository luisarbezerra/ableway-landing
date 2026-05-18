import { ElementType } from 'react'
import { User, Home, Check } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { ServicesDict } from '@/dictionaries'

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-[9px] text-[13px] text-navy leading-[1.5]">
      <div className="w-[18px] h-[18px] rounded-full bg-mint-light flex items-center justify-center flex-shrink-0 mt-[1px]">
        <Check size={10} stroke="#44B893" strokeWidth={3} />
      </div>
      {children}
    </li>
  )
}

function ServiceCard({
  premium,
  title,
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
  return (
    <div
      className={`bg-white rounded-[16px] border overflow-hidden transition-shadow duration-[150ms] hover:shadow-[0_4px_20px_rgba(28,49,68,.06)] ${
        premium ? 'border-mint' : 'border-[var(--border)]'
      }`}
    >
      <div className="px-7 pt-7 pb-5">
        <span
          className={`inline-block text-[10px] font-bold tracking-[.15em] uppercase px-[9px] py-[3px] rounded-[4px] mb-3 ${
            premium ? 'bg-mint-light text-mint-dark' : 'bg-warm text-stone'
          }`}
        >
          {premium ? labelPremium : labelBasic}
        </span>
        <div className="font-syne text-[20px] font-bold text-navy mb-2">{title}</div>
        <p className="text-[13px] leading-[1.6] m-0">{desc}</p>
      </div>
      <div className="px-7 pb-7 pt-5 border-t border-[var(--border)]">
        <ul className="list-none flex flex-col gap-[9px] p-0 m-0">
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
            <div key={title} className="mb-12 last:mb-0">
              <div className="flex items-center gap-[10px] font-syne text-[18px] font-bold text-navy mb-2">
                <Icon size={20} stroke="#6ED3B1" strokeWidth={2} />
                {title}
              </div>
              <p className="text-[14px] mb-[22px]">{desc}</p>
              <div className="grid sm:grid-cols-2 gap-5">
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
