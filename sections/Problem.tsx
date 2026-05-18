import { AlertTriangle, DollarSign, Search } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ElementType } from 'react'
import type { ProblemDict } from '@/dictionaries'

const ICONS: ElementType[] = [AlertTriangle, DollarSign, Search]

export function Problem({ dict }: { dict: ProblemDict }) {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <h2 className="font-syne text-[clamp(28px,3vw,42px)] font-bold text-navy mb-[18px] leading-[1.15]">
            {dict.headingLine1}
            <br />
            {dict.headingLine2}
          </h2>
          <p className="text-[16px] leading-[1.75] mb-6">{dict.body}</p>
          <blockquote className="py-5 px-6 border-l-[3px] border-mint bg-mint-lighter rounded-r-[8px]">
            <p className="text-[15px] text-navy font-medium italic leading-[1.6] m-0">
              {dict.blockquote}
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col gap-[14px]">
          {dict.cards.map(({ title, desc }, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={title}
                className="flex gap-4 items-start p-5 rounded-[12px] border border-[var(--border)] bg-white transition-shadow duration-[150ms] hover:shadow-[0_4px_20px_rgba(28,49,68,.06)]"
              >
                <div className="w-10 h-10 rounded-[10px] bg-mint-lighter flex items-center justify-center flex-shrink-0">
                  <Icon size={18} stroke="#44B893" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-syne text-[15px] font-bold text-navy mb-1">{title}</div>
                  <p className="text-[13px] leading-[1.6] m-0">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
