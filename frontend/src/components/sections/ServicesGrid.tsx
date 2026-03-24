import { fetchServices } from '@/lib/api'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'

export default async function ServicesGrid() {
  const services = await fetchServices()

  return (
    <section id="services" className="bg-brand-gray-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Services"
            subtitle="End-to-end expertise across the full digital transformation spectrum."
            className="mb-0"
          />
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>

        {/* Grid with gap-px separator trick */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gray-mid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
