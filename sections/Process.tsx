import { Eyebrow } from '@/components/ui/Eyebrow'
import type { ProcessDict } from '@/dictionaries'

export function Process({ dict }: { dict: ProcessDict }) {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-10">
        <div className="text-center mb-14">
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <h2 className="font-syne text-[clamp(28px,3vw,42px)] font-bold text-navy mb-3 leading-[1.15]">
            {dict.heading}
          </h2>
          <p className="text-[16px] max-w-[520px] mx-auto">{dict.body}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {dict.steps.map(({ num, title, desc }, i) => (
            <div key={num} className="relative p-9 rounded-[16px] border border-[var(--border)]">
              {i < dict.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-[17px] w-[34px] h-[2px] bg-mint-light z-10 -translate-y-1/2">
                  <span className="absolute -right-1 -top-[11px] text-mint text-[20px] leading-none">
                    ›
                  </span>
                </div>
              )}
              <div className="font-syne font-extrabold text-[13px] text-mint-dark tracking-[.12em] mb-4">
                {num}
              </div>
              <div className="font-syne text-[18px] font-bold text-navy mb-[10px]">{title}</div>
              <p className="text-[14px] leading-[1.7] m-0">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
