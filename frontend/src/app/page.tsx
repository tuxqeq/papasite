export const dynamic = 'force-dynamic'

import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import InsightsSection from '@/components/sections/InsightsSection'
import StatsSection from '@/components/sections/StatsSection'
import IndustriesSection from '@/components/sections/IndustriesSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatsSection />
      <IndustriesSection />
      <InsightsSection />
    </>
  )
}
