'use client'

import { useState } from 'react'
import { submitContact } from '@/lib/api'
import type { ContactFormPayload } from '@/types'
import { Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const services = [
  'Digital Strategy',
  'Cloud Solutions',
  'AI & Data Analytics',
  'Cybersecurity',
  'Business Consulting',
  'Technology Modernization',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormPayload>({
    name: '',
    email: '',
    company: '',
    message: '',
    service: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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

  const inputClass =
    'w-full bg-brand-gray-dark border border-brand-gray-mid text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors duration-200'

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-brand-gray-dark py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">Get in Touch</p>
          <div className="w-16 h-1 bg-brand-purple mb-6" />
          <h1 className="text-6xl lg:text-7xl font-black uppercase leading-none text-white mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            Tell us about your challenge. Our team will be in touch within 24 hours.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Form */}
        <div className="lg:col-span-2">
          {status === 'success' ? (
            <div className="flex flex-col items-start gap-4 py-16">
              <CheckCircle2 className="w-12 h-12 text-brand-purple" />
              <h2 className="text-3xl font-black uppercase text-white">Message Sent!</h2>
              <p className="text-gray-400 text-lg">
                Thank you for reaching out. A member of our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', message: '', service: '' }) }}
                className="mt-4 text-brand-purple font-semibold hover:underline text-sm uppercase tracking-wide"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project or challenge…"
                  className={inputClass}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="self-start flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-dark disabled:opacity-60 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@bireca.com" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200">
              <Mail className="w-5 h-5 text-brand-purple" />
              hello@bireca.com
            </a>
            <a href="tel:+48221234567" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200">
              <Phone className="w-5 h-5 text-brand-purple" />
              +48 22 123 45 67
            </a>
          </div>

          <div className="border border-brand-purple/30 p-6 bg-brand-purple/5">
            <p className="text-white font-bold mb-2 text-sm">Response Time</p>
            <p className="text-gray-400 text-sm">
              We typically respond within 24 hours on business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
