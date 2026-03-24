import { fetchInsights } from '@/lib/api'
import InsightCard from '@/components/ui/InsightCard'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'

export default async function InsightsSection() {
  const insights = await fetchInsights(3)

  return (
    <section id="insights" className="bg-brand-gray-light py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <SectionHeader
            eyebrow="Latest Thinking"
            title="Insights & Research"
            subtitle="Our experts share the latest thinking on technology, strategy, and transformation."
            light
            className="mb-0"
          />
          <Button href="/insights" variant="outline" className="border-black text-black hover:bg-black hover:text-white shrink-0">
            All Insights
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  )
}
