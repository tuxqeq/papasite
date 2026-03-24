export const dynamic = 'force-dynamic'

import { fetchServices } from '@/lib/api'
import {
  Lightbulb, Cloud, Brain, Shield, TrendingUp, Cpu, CheckCircle2, LucideIcon,
} from 'lucide-react'
import type { Service } from '@/types'
import Button from '@/components/ui/Button'

const iconMap: Record<string, LucideIcon> = { Lightbulb, Cloud, Brain, Shield, TrendingUp, Cpu }

function ServiceDetail({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Lightbulb
  return (
    <div id={service.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 border-b border-brand-gray-mid last:border-0">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-brand-purple/10 rounded">
            <Icon className="w-7 h-7 text-brand-purple" />
          </div>
          <h2 className="text-3xl font-black uppercase text-white">{service.title}</h2>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">{service.description}</p>
        <Button href="/contact" variant="primary">Get in Touch</Button>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-4">Key Capabilities</p>
        <ul className="flex flex-col gap-3">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-brand-purple mt-0.5 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default async function ServicesPage() {
  const services = await fetchServices()

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Page header */}
      <div className="bg-brand-gray-dark py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">What We Do</p>
          <div className="w-16 h-1 bg-brand-purple mb-6" />
          <h1 className="text-6xl lg:text-7xl font-black uppercase leading-none text-white mb-6">
            Our Services
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            Comprehensive capabilities across strategy, technology, and operations — all under one roof.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {services.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}
