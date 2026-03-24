'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const industries = [
  'Financial Services',
  'Healthcare & Life Sciences',
  'Retail & Consumer Goods',
  'Energy & Utilities',
  'Manufacturing',
  'Public Sector',
  'Telecommunications',
  'Media & Entertainment',
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-brand-gray-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
              Industries
            </p>
            <h2 className="text-4xl lg:text-5xl font-black uppercase leading-none text-white mb-6">
              Deep Domain Expertise
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We bring sector-specific knowledge combined with cross-industry best practices to
              deliver transformation that is practical, scalable, and deeply relevant to your business context.
            </p>
            <Button href="/services" variant="primary">
              Explore Our Expertise
            </Button>
          </div>

          {/* Right: industry grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex items-center gap-4 border-l-2 border-brand-purple pl-4 py-2 cursor-default hover:border-white transition-colors duration-200"
              >
                <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors duration-200">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
