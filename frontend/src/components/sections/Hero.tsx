'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Deep purple gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e0042] via-[#08000f] to-black" />

      {/* Large primary glow — top right */}
      <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-brand-purple/30 rounded-full blur-[180px] pointer-events-none" />

      {/* Secondary glow — center left */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Accent glow — bottom right */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-400/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
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
            className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-purple-light mb-8 rounded-full"
          />

          {/* Headline */}
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black uppercase leading-none text-white mb-8 max-w-5xl">
            Transform.{' '}
            <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
              Innovate.
            </span>{' '}
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
