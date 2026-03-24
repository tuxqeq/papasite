'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo.svg" alt="Biretica" width={140} height={35} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 uppercase tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-brand-purple hover:bg-brand-purple-dark text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-8 transition-all duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-3xl font-black uppercase text-white hover:text-brand-purple transition-colors duration-200"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>
    </>
  )
}
