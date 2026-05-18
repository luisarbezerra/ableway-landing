import { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'navy' | 'outline'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-mint text-navy hover:bg-mint-dark',
  navy: 'bg-navy text-white hover:bg-navy-light',
  outline:
    'bg-transparent text-navy border border-[rgba(28,49,68,.08)] hover:border-mint hover:text-mint-dark',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-[9px] font-jakarta text-[15px] font-semibold px-[26px] py-[13px] rounded-[8px] cursor-pointer no-underline transition-all duration-[180ms] whitespace-nowrap ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
