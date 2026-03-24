import { clsx } from 'clsx'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  className?: string
}

export default function SectionHeader({ eyebrow, title, subtitle, light, className }: SectionHeaderProps) {
  return (
    <div className={clsx('mb-12', className)}>
      {eyebrow && (
        <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          'text-4xl lg:text-5xl font-black uppercase leading-none',
          light ? 'text-black' : 'text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-lg max-w-2xl',
            light ? 'text-gray-600' : 'text-gray-400'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
