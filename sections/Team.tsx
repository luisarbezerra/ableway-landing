import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { TeamDict } from '@/dictionaries'

export function Team({ dict }: { dict: TeamDict }) {
  return (
    <section id="team" className="py-24 bg-warm">
      <div className="max-w-container mx-auto px-10">

        {/* Intro */}
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <h2 className="font-syne text-[clamp(28px,3vw,42px)] font-bold text-navy mb-5 leading-[1.15]">
            {dict.heading}
          </h2>
          <p className="text-[16px] leading-[1.75] text-stone">{dict.body}</p>
        </div>

        {/* Narrative block */}
        <div className="mb-10">
          <div className="flex items-center gap-[10px] font-syne text-[18px] font-bold text-navy mb-3">
            <BookOpen size={20} stroke="#6ED3B1" strokeWidth={2} />
            {dict.narrativeLabel}
          </div>
          <p className="text-[15px] leading-[1.8] text-stone">
            {dict.narrative}
          </p>
        </div>

        {/* Founders */}
        <div className="flex flex-col gap-12">
          {dict.members.map(({ name, role, bio, tags, photo }, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={name}
                className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} gap-0 rounded-[28px] overflow-hidden border border-[var(--border)] bg-white`}
                style={{ boxShadow: '0 8px 48px rgba(28,49,68,.07)' }}
              >
                {/* Photo */}
                <div className="relative md:w-[42%] h-[360px] md:h-auto bg-mint-light flex-shrink-0">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image src="/logo-mint.svg" width={56} height={56} alt="" unoptimized />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-10 py-12 md:py-14 flex-1">
                  <div className="text-[11px] font-bold tracking-[.16em] uppercase text-mint-dark mb-3">
                    {role}
                  </div>
                  <h3 className="font-syne text-[clamp(22px,2.2vw,30px)] font-bold text-navy leading-[1.2] mb-5">
                    {name}
                  </h3>
                  <p className="text-[15px] leading-[1.85] text-stone mb-8">{bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-navy bg-mint-light px-[13px] py-[6px] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
