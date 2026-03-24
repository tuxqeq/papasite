import type { Service, Insight, ContactFormPayload, ApiResponse } from '@/types'

const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080'

export async function fetchServices(): Promise<Service[]> {
  const res = await fetch(`${BASE}/api/services`, { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch services')
  const json: ApiResponse<Service[]> = await res.json()
  return json.data
}

export async function fetchInsights(limit?: number): Promise<Insight[]> {
  const url = new URL(`${BASE}/api/insights`)
  if (limit) url.searchParams.set('limit', String(limit))
  const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch insights')
  const json: ApiResponse<Insight[]> = await res.json()
  return json.data
}

export async function submitContact(payload: ContactFormPayload): Promise<ApiResponse<null>> {
  const res = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const json: ApiResponse<null> = await res.json()
  if (!res.ok) throw new Error(json.message ?? 'Failed to submit contact form')
  return json
}
