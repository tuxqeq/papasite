import Image from 'next/image'
import Link from 'next/link'
import type { Insight } from '@/types'

export default function InsightCard({ insight }: { insight: Insight }) {
  const date = new Date(insight.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link href={`/insights/${insight.slug}`} className="group flex flex-col bg-white">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={insight.imageUrl}
          alt={insight.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="text-brand-purple text-xs font-bold uppercase tracking-widest">
          {insight.category}
        </span>
        <h3 className="text-xl font-bold text-black leading-snug group-hover:text-brand-purple transition-colors duration-200">
          {insight.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{insight.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
          <span>{insight.author}</span>
          <span>
            {date} · {insight.readTimeMinutes} min read
          </span>
        </div>
      </div>
    </Link>
  )
}
