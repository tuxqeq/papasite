'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-dark via-black to-black" />

      {/* Decorative purple glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] mb-6"
          >
            Digital Transformation Consultancy
          </motion.p>

          {/* Purple accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ originX: 0 }}
            className="w-20 h-1 bg-brand-purple mb-8"
          />

          {/* Headline */}
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black uppercase leading-none text-white mb-8 max-w-5xl">
            Transform.{' '}
            <span className="text-brand-purple">Innovate.</span>{' '}
            Grow.
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            We partner with the world&apos;s most ambitious organisations to navigate complexity,
            accelerate innovation, and achieve sustainable competitive advantage.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/services" variant="primary" className="text-base px-8 py-4">
              Explore Services
            </Button>
            <Button href="/about" variant="outline" className="text-base px-8 py-4">
              Who We Are
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-brand-gray-mid pt-10"
        >
          {[
            { value: '500+', label: 'Clients Served' },
            { value: '40', label: 'Countries' },
            { value: '98%', label: 'Client Retention' },
            { value: '15 yrs', label: 'Of Experience' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  )
}
