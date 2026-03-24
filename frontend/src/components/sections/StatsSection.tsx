'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Clients Worldwide' },
  { value: '40', label: 'Countries' },
  { value: '98%', label: 'Client Retention' },
  { value: '15', label: 'Years of Excellence' },
]

export default function StatsSection() {
  return (
    <section className="bg-brand-purple py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:text-left lg:border-l lg:border-white/30 lg:pl-8 first:border-0 first:pl-0"
            >
              <p className="text-5xl lg:text-6xl font-black text-white">{stat.value}</p>
              <p className="text-white/70 text-xs uppercase tracking-widest mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
