import { ElementType } from 'react'
import { Heart, Check, Smile, Lock, Globe, Zap } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { ManifestoDict, ValuesDict } from '@/dictionaries'

const VALUE_ICONS: ElementType[] = [Heart, Check, Smile, Lock, Globe, Zap]

export function Manifesto({ dict, values }: { dict: ManifestoDict; values: ValuesDict }) {
  return (
    <section id="manifesto" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-10">

        {/* Quote */}
        <div className="mb-16 max-w-[700px] mx-auto text-center">
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <blockquote className="not-italic font-syne text-[clamp(24px,3vw,38px)] font-bold text-navy leading-[1.35] tracking-[-0.015em] mb-5">
            {dict.quoteBase}{' '}
            <em className="text-mint-dark not-italic">{dict.quoteEm}</em>
          </blockquote>
          <p className="text-[16px] text-stone leading-[1.75]">{dict.body}</p>
        </div>

        {/* Values */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <h3 className="font-syne text-[13px] font-bold tracking-[.2em] uppercase text-stone whitespace-nowrap">
              {values.heading}
            </h3>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.items.map(({ title, desc }, i) => {
              const Icon = VALUE_ICONS[i]
              return (
                <div
                  key={title}
                  className="p-6 rounded-[14px] border border-[var(--border)] bg-white hover:shadow-[0_4px_20px_rgba(28,49,68,.05)] transition-shadow duration-150"
                >
                  <div className="w-[36px] h-[36px] rounded-[9px] bg-mint-light flex items-center justify-center mb-4">
                    <Icon size={16} stroke="#44B893" strokeWidth={2} />
                  </div>
                  <div className="font-syne text-[15px] font-bold text-navy mb-[6px]">{title}</div>
                  <p className="text-[13px] leading-[1.65] text-stone m-0">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
