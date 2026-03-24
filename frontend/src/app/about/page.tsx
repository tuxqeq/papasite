import { Users, Globe, Award, Target } from 'lucide-react'
import Button from '@/components/ui/Button'

const values = [
  {
    icon: Target,
    title: 'Client-First',
    description: 'Every decision we make is anchored in what creates the most value for our clients. Our success is measured by theirs.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'With presence across 40 countries, we bring the best of global thinking to every local challenge.',
  },
  {
    icon: Users,
    title: 'People-Centred',
    description: 'We believe transformation only succeeds when it works for the people living through it — employees, customers, and communities.',
  },
  {
    icon: Award,
    title: 'Relentless Excellence',
    description: 'We hold ourselves to the highest standards of quality, integrity, and impact in everything we deliver.',
  },
]

const team = [
  { name: 'Aleksandra Kowalczyk', role: 'Chief Executive Officer', image: 'https://picsum.photos/seed/ceo/200/200' },
  { name: 'Marek Dąbrowski', role: 'Chief Technology Officer', image: 'https://picsum.photos/seed/cto/200/200' },
  { name: 'Joanna Wiśniewska', role: 'Chief Strategy Officer', image: 'https://picsum.photos/seed/cso/200/200' },
  { name: 'Rafał Nowicki', role: 'Chief Operating Officer', image: 'https://picsum.photos/seed/coo/200/200' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero */}
      <section className="bg-brand-gray-dark py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">Who We Are</p>
          <div className="w-16 h-1 bg-brand-purple mb-6" />
          <h1 className="text-6xl lg:text-7xl font-black uppercase leading-none text-white mb-6 max-w-4xl">
            Built for<br />Transformation
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            For 15 years, Biretica has been the trusted partner for organisations navigating complex digital change.
            We are strategists, technologists, and delivery experts — all in one firm.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-b border-brand-gray-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">Our Mission</p>
            <h2 className="text-4xl font-black uppercase text-white mb-6">
              Enabling Organisations to Thrive in a Digital World
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We exist to make transformation real. Not through slide decks or frameworks alone — but through
              hands-on partnership that produces durable results. We bring together strategy, technology, and
              human insight to help our clients build the capabilities they need to compete tomorrow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Founded', value: '2010' },
              { label: 'Employees', value: '2,400+' },
              { label: 'Countries', value: '40' },
              { label: 'Clients', value: '500+' },
            ].map((item) => (
              <div key={item.label} className="bg-brand-gray-dark p-6 border border-brand-gray-mid">
                <p className="text-4xl font-black text-white">{item.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-b border-brand-gray-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">Our Values</p>
          <h2 className="text-4xl font-black uppercase text-white mb-12">What Guides Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-4">
                <Icon className="w-8 h-8 text-brand-purple" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 border-b border-brand-gray-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">Leadership</p>
          <h2 className="text-4xl font-black uppercase text-white mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <p className="font-bold text-white">{member.name}</p>
                  <p className="text-brand-purple text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section id="careers" className="py-24 bg-brand-purple">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black uppercase text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            We&apos;re always looking for exceptional people who are passionate about technology, strategy, and making a real impact.
          </p>
          <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple text-base px-8 py-4">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  )
}
