import { Mail } from 'lucide-react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import type { CTADict } from '@/dictionaries'
import { EMAIL, INSTAGRAM } from '@/lib/constants'

export function CTA({ dict, waHref }: { dict: CTADict; waHref: string }) {
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
          <Button href={waHref} variant="navy" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={18} />
            {dict.btnPrimary}
          </Button>
          <Button href={EMAIL} variant="outline">
            <Mail size={16} />
            {dict.btnSecondary}
          </Button>
          <Button href={INSTAGRAM} variant="outline" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} />
            {dict.btnTertiary}
          </Button>
        </div>
      </div>
    </section>
  )
}
