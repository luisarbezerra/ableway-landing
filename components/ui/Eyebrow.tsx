import { CSSProperties, ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function Eyebrow({ children, className = '', style }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[.22em] uppercase text-mint-dark mb-[18px] before:content-[''] before:block before:w-5 before:h-[2px] before:bg-mint before:rounded-sm ${className}`}
      style={style}
    >
      {children}
    </span>
  )
}
