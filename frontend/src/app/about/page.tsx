import { Target, Globe, Users, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    num: '01',
    Icon: Target,
    title: 'Client-First',
    description:
      'Every decision we make is anchored in what creates the most value for our clients. Our success is measured by theirs.',
  },
  {
    num: '02',
    Icon: Globe,
    title: 'Global Perspective',
    description:
      'We think globally from day one. Our approach is shaped by international best practices, built to serve organisations wherever they operate.',
  },
  {
    num: '03',
    Icon: Users,
    title: 'People-Centred',
    description:
      'We believe transformation only succeeds when it works for the people living through it — employees, customers, and communities.',
  },
  {
    num: '04',
    Icon: Award,
    title: 'Relentless Excellence',
    description:
      'We hold ourselves to the highest standards of quality, integrity, and impact in everything we deliver.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-16">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-black py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e0042] via-[#08000f] to-black" />
        <div className="absolute -top-24 right-0 w-[700px] h-[700px] bg-brand-purple/25 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] mb-6">Who We Are</p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-purple-light rounded-full mb-10" />

          <h1 className="text-[7vw] sm:text-6xl lg:text-8xl xl:text-9xl font-black uppercase leading-[1.1] text-white mb-8">
            Built for<br />
            <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Bireca was built to solve one problem: too many organisations are drowning in data but starving for insight. We turn that around — with intelligence solutions that put the right information in front of the right people.
            </p>
            <div className="shrink-0 flex items-center gap-3 border border-brand-gray-mid px-5 py-2.5 rounded-full self-start sm:self-auto">
              <span className="text-gray-500 text-xs uppercase tracking-widest">Est.</span>
              <span className="w-px h-3 bg-brand-gray-mid" />
              <span className="text-gray-300 text-xs font-semibold uppercase tracking-widest">Warsaw, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="border-b border-brand-gray-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — pull statement */}
          <div>
            <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-6">Our Mission</p>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-purple-light rounded-full mb-8" />
            <p className="text-3xl lg:text-4xl xl:text-5xl font-black uppercase leading-tight text-white">
              We make transformation{' '}
              <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
                real.
              </span>
            </p>
          </div>

          {/* Right — story */}
          <div className="flex flex-col gap-6 pt-0 lg:pt-16">
            <p className="text-gray-300 text-lg leading-relaxed">
              We exist to make transformation real — not through slide decks or frameworks alone, but through hands-on partnership that produces measurable results. We bring together strategy, technology, and human insight to help organisations turn their data into a genuine competitive advantage.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Bireca was founded in Warsaw in 2025 on one belief: that data, when properly harnessed, removes the guesswork from leadership. Every dashboard we build, every model we deploy, and every report we design is built around that belief.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We are at the beginning of our journey — and we are looking for the right partners to grow with.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-brand-gray-dark border-b border-brand-gray-mid py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-6">Our Values</p>
              <h2 className="text-5xl lg:text-6xl font-black uppercase leading-none text-white">
                What<br />Guides Us
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              Four principles that inform every engagement, every decision, and every deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-gray-mid rounded-2xl overflow-hidden">
            {values.map(({ num, Icon, title, description }) => (
              <div
                key={title}
                className="group relative bg-black hover:bg-brand-gray-dark transition-colors duration-300 p-10 lg:p-12 overflow-hidden flex flex-col gap-6"
              >
                {/* Ghost number */}
                <div className="absolute -bottom-6 -right-4 text-[120px] font-black leading-none select-none pointer-events-none text-white/[0.04] group-hover:text-white/[0.06] transition-colors duration-300">
                  {num}
                </div>

                {/* Top row: number + icon */}
                <div className="flex items-start justify-between">
                  <span className="text-brand-purple text-sm font-black uppercase tracking-widest">{num}</span>
                  <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20 group-hover:bg-brand-purple/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-purple" />
                  </div>
                </div>

                {/* Accent line */}
                <div className="w-10 h-0.5 bg-gradient-to-r from-brand-purple to-brand-purple-light rounded-full" />

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-black uppercase text-white leading-tight">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-black py-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] mb-6">Work With Us</p>
          <h2 className="text-5xl lg:text-7xl font-black uppercase leading-none text-white mb-6">
            Let&apos;s build<br />something.
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-10">
            Whether you&apos;re starting from scratch or scaling what you have — we&apos;re ready to partner.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-10 py-5 text-sm font-semibold uppercase tracking-wide rounded-full transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

    </div>
  )
}
