import {
  BarChart2, TrendingUp, Target, Factory, Truck, Shield, AlertTriangle, ArrowRight, LucideIcon,
} from 'lucide-react'
import type { Service } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

const iconMap: Record<string, LucideIcon> = {
  BarChart2, TrendingUp, Target, Factory, Truck, Shield, AlertTriangle,
}

const gradientMap: Record<string, string> = {
  BarChart2:     'from-violet-900/75 via-purple-900/50 to-black/75',
  TrendingUp:    'from-emerald-900/75 via-teal-900/50 to-black/75',
  Target:        'from-rose-900/75 via-orange-900/50 to-black/75',
  Factory:       'from-amber-900/75 via-yellow-900/50 to-black/75',
  Truck:         'from-sky-900/75 via-blue-900/50 to-black/75',
  Shield:        'from-red-900/75 via-rose-950/50 to-black/75',
  AlertTriangle: 'from-orange-900/75 via-amber-950/50 to-black/75',
}

const glowMap: Record<string, string> = {
  BarChart2:     'bg-violet-500/40',
  TrendingUp:    'bg-emerald-500/40',
  Target:        'bg-rose-500/40',
  Factory:       'bg-amber-500/40',
  Truck:         'bg-sky-500/40',
  Shield:        'bg-red-500/40',
  AlertTriangle: 'bg-orange-500/40',
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? BarChart2
  const gradient = gradientMap[service.icon] ?? 'from-violet-900/75 via-black/50 to-black/75'
  const glow = glowMap[service.icon] ?? 'bg-violet-500/40'

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
    >
      {/* Photo background */}
      {service.imageUrl && (
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      {/* Coloured gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity duration-300 group-hover:opacity-60`} />

      {/* Decorative glow blob */}
      <div className={`absolute -top-8 -right-8 w-40 h-40 ${glow} rounded-full blur-[50px] group-hover:scale-150 group-hover:opacity-70 transition-all duration-700`} />

      {/* Bottom vignette for resting title readability */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-0 transition-opacity duration-300" />

      {/* Resting state: title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-lg font-bold text-white">{service.title}</h3>
      </div>

      {/* Hover overlay: full content */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm flex flex-col justify-center p-8 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out">
        <Icon className="w-11 h-11 text-white mb-4 opacity-90" />
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed mb-6">{service.description}</p>
        <span className="flex items-center gap-2 text-white text-sm font-semibold">
          Learn more
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </div>
    </Link>
  )
}
