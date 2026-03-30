export const dynamic = 'force-dynamic'

import { fetchInsights } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, User } from 'lucide-react'
import { notFound } from 'next/navigation'

export default async function InsightDetailPage({ params }: { params: { slug: string } }) {
  const insights = await fetchInsights()
  const insight = insights.find((i) => i.slug === params.slug)

  if (!insight) notFound()

  const date = new Date(insight.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero image */}
      <div className="relative h-72 lg:h-[480px] w-full bg-black">
        <Image
          src={insight.imageUrl}
          alt={insight.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 lg:px-8 pb-10">
          <span className="inline-block bg-brand-purple text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
            {insight.category}
          </span>
          <h1 className="text-3xl lg:text-5xl font-black leading-tight text-white">{insight.title}</h1>
        </div>
      </div>

      {/* Meta */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-8 border-b border-gray-100 flex flex-wrap gap-6 text-sm text-gray-500">
        <span className="flex items-center gap-2"><User className="w-4 h-4" />{insight.author}</span>
        <span>{date}</span>
        <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{insight.readTimeMinutes} min read</span>
      </div>

      {/* Content placeholder */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-8">{insight.excerpt}</p>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            The landscape of digital transformation continues to evolve at an unprecedented pace. Organisations that fail to adapt risk falling behind competitors who have embraced the latest methodologies and technologies.
          </p>
          <p>
            At Bireca, we work alongside leadership teams to design and execute transformation strategies that deliver measurable outcomes — not just technology deployments, but genuine business change that sticks.
          </p>
          <p>
            Our approach combines deep domain expertise with a pragmatic, human-centred delivery model. We believe that successful transformation requires equal attention to technology, process, and people.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/insights" className="flex items-center gap-2 text-brand-purple font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    </div>
  )
}
