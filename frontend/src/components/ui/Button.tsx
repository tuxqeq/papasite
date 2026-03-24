import { clsx } from 'clsx'
import Link from 'next/link'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-purple hover:bg-brand-purple-dark text-white',
  outline:
    'bg-transparent border border-white text-white hover:bg-white hover:text-black',
  ghost:
    'bg-transparent text-white hover:text-brand-purple',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled,
  className,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const classes = clsx(base, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
