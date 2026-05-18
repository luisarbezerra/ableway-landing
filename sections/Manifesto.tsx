import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { ManifestoDict } from '@/dictionaries'
import { WA } from '@/lib/constants'

export function Manifesto({ dict }: { dict: ManifestoDict }) {
  return (
    <section id="manifesto" className="py-20 bg-navy">
      <div className="max-w-[760px] mx-auto px-10 text-center">
        <Eyebrow style={{ color: 'rgba(110,211,177,.7)' }}>{dict.eyebrow}</Eyebrow>
        <blockquote className="not-italic font-syne text-[clamp(24px,3.5vw,38px)] font-bold text-white leading-[1.4] tracking-[-0.015em] mb-6">
          {dict.quoteBase}{' '}
          <em className="text-mint not-italic">{dict.quoteEm}</em>
        </blockquote>
        <p className="text-[16px] text-white/50 leading-[1.75] mb-9">{dict.body}</p>
        <Button href={WA} target="_blank" rel="noopener noreferrer">
          {dict.cta}
        </Button>
      </div>
    </section>
  )
}
