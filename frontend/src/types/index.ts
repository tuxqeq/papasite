export interface Service {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  imageUrl: string
  features: string[]
}

export interface Insight {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  imageUrl: string
  publishedAt: string
  readTimeMinutes: number
  author: string
}

export interface ContactFormPayload {
  name: string
  email: string
  company: string
  message: string
  service?: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}
