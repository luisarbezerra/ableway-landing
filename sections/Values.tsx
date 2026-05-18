import { ElementType } from 'react'
import { Heart, Check, Smile, Lock, Globe, Zap } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { ValuesDict } from '@/dictionaries'

const VALUE_ICONS: ElementType[] = [Heart, Check, Smile, Lock, Globe, Zap]

export function Values({ dict }: { dict: ValuesDict }) {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-10">
        <div className="text-center mb-[52px]">
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <h2 className="font-syne text-[clamp(28px,3vw,42px)] font-bold text-navy leading-[1.15]">
            {dict.heading}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dict.items.map(({ title, desc }, i) => {
            const Icon = VALUE_ICONS[i]
            return (
              <div key={title} className="p-7 rounded-[14px] border border-[var(--border)]">
                <div className="w-[38px] h-[38px] rounded-[9px] bg-mint-light flex items-center justify-center mb-[14px]">
                  <Icon size={16} stroke="#44B893" strokeWidth={2} />
                </div>
                <div className="font-syne text-[15px] font-bold text-navy mb-[7px]">{title}</div>
                <p className="text-[13px] leading-[1.65] m-0">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
