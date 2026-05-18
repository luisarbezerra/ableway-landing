import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import type { CTADict } from '@/dictionaries'
import { WA, EMAIL } from '@/lib/constants'

export function CTA({ dict }: { dict: CTADict }) {
  return (
    <section id="cta" className="py-24 bg-mint-lighter border-t border-mint-light">
      <div className="max-w-[640px] mx-auto px-10 text-center">
        <Eyebrow>{dict.eyebrow}</Eyebrow>
        <h2 className="font-syne text-[clamp(30px,4vw,48px)] font-extrabold text-navy mb-4 leading-[1.1]">
          {dict.headingBase}{' '}
          <em className="text-mint-dark not-italic">{dict.headingEm}</em>
        </h2>
        <p className="text-[16px] leading-[1.7] mb-9 max-w-[480px] mx-auto">{dict.body}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button
            href={WA}
            variant="navy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '16px', padding: '15px 30px' }}
          >
            <WhatsAppIcon size={17} />
            {dict.btnPrimary}
          </Button>
          <Button
            href={EMAIL}
            variant="outline"
            style={{ fontSize: '16px', padding: '15px 30px' }}
          >
            {dict.btnSecondary}
          </Button>
        </div>
      </div>
    </section>
  )
}
