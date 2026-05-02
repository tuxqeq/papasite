import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Github } from 'lucide-react'

const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'Executive Intelligence', href: '/services#executive-intelligence' },
      { label: 'Sales Performance', href: '/services#sales-performance' },
      { label: 'Marketing Intelligence', href: '/services#marketing-intelligence' },
      { label: 'Operational Excellence', href: '/services#operational-excellence' },
      { label: 'Supply Chain Visibility', href: '/services#supply-chain-visibility' },
      { label: 'Risk Intelligence', href: '/services#risk-intelligence' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Mission', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Case Studies', href: '/insights' },
      { label: 'News & Insights', href: '/insights' },
      { label: 'Get in Touch', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Cookie Settings', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-brand-gray-mid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.svg" alt="Bireca" width={120} height={30} />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Turning data into decisions.<br />
              Intelligence that drives results.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-brand-gray-mid pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Bireca. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-purple transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-brand-purple transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-brand-purple transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
