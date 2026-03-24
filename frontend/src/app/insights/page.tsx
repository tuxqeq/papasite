export const dynamic = 'force-dynamic'

import { fetchInsights } from '@/lib/api'
import InsightCard from '@/components/ui/InsightCard'

export default async function InsightsPage() {
  const insights = await fetchInsights()

  return (
    <div className="min-h-screen bg-brand-gray-light pt-16">
      {/* Header */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">Latest Thinking</p>
          <div className="w-16 h-1 bg-brand-purple mb-6" />
          <h1 className="text-6xl lg:text-7xl font-black uppercase leading-none text-white mb-6">
            Insights &<br />Research
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            Expert perspectives on digital transformation, emerging technology, and strategic growth.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </div>
  )
}
