import Image from 'next/image'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { TeamDict } from '@/dictionaries'

export function Team({ dict }: { dict: TeamDict }) {
  return (
    <section id="team" className="py-24 bg-warm">
      <div className="max-w-container mx-auto px-10">
        <div className="text-center mb-14">
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <h2 className="font-syne text-[clamp(28px,3vw,42px)] font-bold text-navy mb-3 leading-[1.15]">
            {dict.heading}
          </h2>
          <p className="text-[16px] max-w-[520px] mx-auto">{dict.body}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-7">
          {dict.members.map(({ name, role, bio, tags }) => (
            <div
              key={name}
              className="bg-white rounded-[20px] overflow-hidden border border-[var(--border)]"
            >
              <div className="px-9 pt-9 pb-7 border-b border-[var(--border)] flex items-start gap-[18px]">
                <div className="w-16 h-16 rounded-full bg-mint-light flex-shrink-0 flex items-center justify-center">
                  <Image src="/logo-mint.svg" width={28} height={28} alt="" unoptimized />
                </div>
                <div>
                  <div className="font-syne text-[20px] font-bold text-navy mb-1">{name}</div>
                  <div className="text-[12px] font-semibold tracking-[.1em] uppercase text-mint-dark">
                    {role}
                  </div>
                </div>
              </div>
              <div className="px-9 pt-6 pb-8">
                <p className="text-[14px] leading-[1.75] mb-5">{bio}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-navy bg-mint-light px-[11px] py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
