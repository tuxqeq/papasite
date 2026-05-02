export const dynamic = 'force-dynamic'

import Image from 'next/image'
import Link from 'next/link'
import { fetchServices } from '@/lib/api'
import {
  BarChart2, TrendingUp, Target, Factory, Truck, Shield, AlertTriangle,
  CheckCircle2, ArrowRight, LucideIcon,
} from 'lucide-react'
import type { Service } from '@/types'
import { clsx } from 'clsx'

const iconMap: Record<string, LucideIcon> = {
  BarChart2, TrendingUp, Target, Factory, Truck, Shield, AlertTriangle,
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? BarChart2
  const flipped = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      id={service.slug}
      className="grid grid-cols-1 lg:grid-cols-2 border-t border-brand-gray-mid"
    >
      {/* ── Image panel ── */}
      <div
        className={clsx(
          'group relative min-h-[300px] lg:min-h-[600px] overflow-hidden',
          flipped && 'lg:order-2'
        )}
      >
        {service.imageUrl && (
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}

        {/* Gradient tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-brand-purple/25" />

        {/* Ghost number */}
        <div className="absolute -bottom-4 -left-2 text-[180px] lg:text-[240px] font-black leading-none select-none pointer-events-none text-white/[0.07]">
          {num}
        </div>

        {/* Icon badge */}
        <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10">
          <Icon className="w-7 h-7 text-brand-purple" />
        </div>
      </div>

      {/* ── Content panel ── */}
      <div
        className={clsx(
          'relative flex items-center overflow-hidden bg-brand-gray-dark',
          flipped && 'lg:order-1'
        )}
      >
        {/* Ghost number behind text */}
        <div className="absolute -top-2 -right-2 text-[180px] lg:text-[240px] font-black leading-none select-none pointer-events-none text-white/[0.03]">
          {num}
        </div>

        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-brand-purple text-sm font-black uppercase tracking-widest">{num}</span>
            <span className="w-8 h-px bg-brand-purple/40" />
            <span className="text-gray-600 text-xs uppercase tracking-widest">Service</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black uppercase leading-none text-white mb-5">
            {service.title}
          </h2>

          {/* Accent line */}
          <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-purple-light rounded-full mb-6" />

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {service.features.map((feat) => (
              <div key={feat} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm leading-snug">{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-full transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default async function ServicesPage() {
  const services = await fetchServices()

  return (
    <div className="min-h-screen bg-black pt-16">

      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-black py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e0042] via-[#08000f] to-black" />
        <div className="absolute -top-24 -right-24 w-[700px] h-[700px] bg-brand-purple/25 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] mb-6">
            What We Do
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-purple-light rounded-full mb-10" />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black uppercase leading-none text-white">
              Our<br />
              <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <div className="lg:max-w-sm pb-2">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Reporting and intelligence solutions built for organisations that run on data.
              </p>
              <div className="inline-flex items-center gap-3 border border-brand-gray-mid px-5 py-2.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                <span className="text-gray-300 text-sm font-medium uppercase tracking-wide">
                  {services.length} Specialisations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service rows ── */}
      <div>
        {services.map((service, index) => (
          <ServiceRow key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="relative overflow-hidden bg-brand-gray-dark py-28 border-t border-brand-gray-mid">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Ready to Begin?
          </p>
          <h2 className="text-5xl lg:text-7xl font-black uppercase leading-none text-white mb-6">
            Let&apos;s talk.
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-10">
            Tell us where your data sits today. We&apos;ll show you what it could become.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-10 py-5 text-sm font-semibold uppercase tracking-wide rounded-full transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

    </div>
  )
}
