'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { submitContact } from '@/lib/api'
import type { ContactFormPayload } from '@/types'
import { Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const services = [
  'Executive Intelligence',
  'Sales Performance',
  'Marketing Intelligence',
  'Risk Intelligence',
  'Operational Excellence',
  'Supply Chain Visibility',
  'Security & IT Governance',
]

const inputClass =
  'w-full bg-brand-gray-dark border border-brand-gray-mid rounded-xl text-white placeholder-gray-600 px-4 py-3.5 text-base focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors duration-200'

export default function ContactPage() {
  const router = useRouter()
  const [form, setForm] = useState<ContactFormPayload>({
    name: '',
    email: '',
    company: '',
    message: '',
    service: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    if (status !== 'success') return
    setCountdown(3)
    const interval = setInterval(() => {
      setCountdown(prev => Math.max(prev - 1, 0))
    }, 1000)
    const redirect = setTimeout(() => router.push('/'), 3000)
    return () => {
      clearInterval(interval)
      clearTimeout(redirect)
    }
  }, [status, router])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitContact(form)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-black pt-16">

      {/* ── Thank-you modal ── */}
      {status === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-md bg-brand-gray-dark border border-brand-gray-mid rounded-2xl p-10 flex flex-col items-center gap-6 text-center">
            <div className="w-20 h-20 rounded-full bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-brand-purple" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black uppercase text-white tracking-tight">Message Received</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thank you for reaching out. A member of our team will contact you within 24 hours.
              </p>
            </div>
            <div className="w-full border-t border-brand-gray-mid pt-4">
              <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
                Redirecting in {countdown}s…
              </p>
            </div>
          </div>
        </div>
      )}

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
          <p className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] mb-6">Get in Touch</p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-purple-light rounded-full mb-10" />
          <h1 className="text-[7vw] sm:text-6xl lg:text-8xl xl:text-9xl font-black uppercase leading-[1.05] text-white mb-8">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
              Talk.
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Tell us about your challenge. Our team will be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Form + sidebar ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Company
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a service…</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                placeholder="Tell us about your project or challenge…"
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-dark disabled:opacity-60 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide rounded-full transition-colors duration-200"
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-8 lg:pt-2">

          <div>
            <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">Contact</p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@bireca.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0 group-hover:bg-brand-purple/20 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-brand-purple" />
                </div>
                hello@bireca.com
              </a>
              <a
                href="tel:+48571848216"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0 group-hover:bg-brand-purple/20 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-brand-purple" />
                </div>
                +48 571 848 216
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-brand-purple/25 bg-brand-purple/5 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
              <p className="text-white text-xs font-bold uppercase tracking-widest">Response Time</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We typically respond within 24 hours on business days.
            </p>
          </div>

          <div className="rounded-xl border border-brand-gray-mid bg-brand-gray-dark p-6">
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-3">Location</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Warsaw, Poland<br />
              <span className="text-gray-600">Est. 2025</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
