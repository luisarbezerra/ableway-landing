'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LANGS = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export function LangSwitcher() {
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1]
  return (
    <div className="flex items-center gap-1">
      {LANGS.map(({ code, label }) => (
        <Link
          key={code}
          href={`/${code}`}
          className={`text-[11px] font-bold px-[7px] py-[3px] rounded-[4px] transition-colors duration-[150ms] no-underline ${
            currentLang === code
              ? 'bg-mint-light text-mint-dark'
              : 'text-stone hover:text-navy'
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
