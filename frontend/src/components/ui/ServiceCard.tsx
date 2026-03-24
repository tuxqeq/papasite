import {
  Lightbulb, Cloud, Brain, Shield, TrendingUp, Cpu, ArrowRight, LucideIcon,
} from 'lucide-react'
import type { Service } from '@/types'
import Link from 'next/link'

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Cloud,
  Brain,
  Shield,
  TrendingUp,
  Cpu,
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Lightbulb

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group bg-black p-8 flex flex-col gap-4 hover:bg-brand-purple transition-colors duration-300 cursor-pointer"
    >
      <Icon className="w-8 h-8 text-brand-purple group-hover:text-white transition-colors duration-300" />
      <h3 className="text-xl font-bold text-white">{service.title}</h3>
      <p className="text-gray-400 group-hover:text-white/90 text-sm leading-relaxed flex-1">
        {service.description}
      </p>
      <span className="flex items-center gap-2 text-brand-purple group-hover:text-white text-sm font-semibold transition-colors duration-300">
        Learn more <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
      </span>
    </Link>
  )
}
