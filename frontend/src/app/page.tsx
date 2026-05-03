export const dynamic = 'force-dynamic'

import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import InsightsSection from '@/components/sections/InsightsSection'
import IndustriesSection from '@/components/sections/IndustriesSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <IndustriesSection />
      <InsightsSection />
    </>
  )
}
