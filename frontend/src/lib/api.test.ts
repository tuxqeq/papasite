import { describe, it, expect, vi, afterEach } from 'vitest'
import { fetchServices, fetchInsights, submitContact } from './api'

function mockFetchOk(body: unknown) {
  return vi.fn().mockResolvedValueOnce({
    ok: true,
    json: async () => body,
  } as unknown as Response)
}

function mockFetchFail(body: unknown = {}) {
  return vi.fn().mockResolvedValueOnce({
    ok: false,
    json: async () => body,
  } as unknown as Response)
}

afterEach(() => vi.unstubAllGlobals())

// ── fetchServices ─────────────────────────────────────────────────────────────

describe('fetchServices', () => {
  it('returns services array from response data', async () => {
    const services = [{ id: '1', title: 'Executive Intelligence' }]
    vi.stubGlobal('fetch', mockFetchOk({ data: services, success: true }))
    expect(await fetchServices()).toEqual(services)
  })

  it('appends ?limit=N when provided', async () => {
    const mock = mockFetchOk({ data: [], success: true })
    vi.stubGlobal('fetch', mock)
    await fetchServices(4)
    expect(mock.mock.calls[0][0]).toContain('limit=4')
  })

  it('omits limit param when not provided', async () => {
    const mock = mockFetchOk({ data: [], success: true })
    vi.stubGlobal('fetch', mock)
    await fetchServices()
    expect(mock.mock.calls[0][0]).not.toContain('limit=')
  })

  it('throws on non-ok response', async () => {
    vi.stubGlobal('fetch', mockFetchFail())
    await expect(fetchServices()).rejects.toThrow('Failed to fetch services')
  })
})

// ── fetchInsights ─────────────────────────────────────────────────────────────

describe('fetchInsights', () => {
  it('returns insights array from response data', async () => {
    const insights = [{ id: '1', title: 'AI Transformation' }]
    vi.stubGlobal('fetch', mockFetchOk({ data: insights, success: true }))
    expect(await fetchInsights()).toEqual(insights)
  })

  it('appends ?limit=N when provided', async () => {
    const mock = mockFetchOk({ data: [], success: true })
    vi.stubGlobal('fetch', mock)
    await fetchInsights(2)
    expect(mock.mock.calls[0][0]).toContain('limit=2')
  })

  it('omits limit param when not provided', async () => {
    const mock = mockFetchOk({ data: [], success: true })
    vi.stubGlobal('fetch', mock)
    await fetchInsights()
    expect(mock.mock.calls[0][0]).not.toContain('limit=')
  })

  it('throws on non-ok response', async () => {
    vi.stubGlobal('fetch', mockFetchFail())
    await expect(fetchInsights()).rejects.toThrow('Failed to fetch insights')
  })
})

// ── submitContact ─────────────────────────────────────────────────────────────

describe('submitContact', () => {
  const payload = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    company: 'ACME',
    message: 'Hello',
    service: 'Executive Intelligence',
  }

  it('returns api response on success', async () => {
    const apiResp = { success: true, message: "Thank you, we'll be in touch.", data: null }
    vi.stubGlobal('fetch', mockFetchOk(apiResp))
    expect(await submitContact(payload)).toEqual(apiResp)
  })

  it('throws with server message on failure', async () => {
    vi.stubGlobal('fetch', mockFetchFail({ message: 'name, email, and message are required' }))
    await expect(submitContact(payload)).rejects.toThrow('name, email, and message are required')
  })

  it('throws generic message when server provides none', async () => {
    vi.stubGlobal('fetch', mockFetchFail({}))
    await expect(submitContact(payload)).rejects.toThrow('Failed to submit contact form')
  })

  it('sends POST with JSON content-type', async () => {
    const mock = mockFetchOk({ success: true, data: null })
    vi.stubGlobal('fetch', mock)
    await submitContact(payload)
    const [, options] = mock.mock.calls[0] as [string, RequestInit]
    expect(options.method).toBe('POST')
    expect((options.headers as Record<string, string>)['Content-Type']).toBe('application/json')
  })

  it('serialises payload as JSON body', async () => {
    const mock = mockFetchOk({ success: true, data: null })
    vi.stubGlobal('fetch', mock)
    await submitContact(payload)
    const [, options] = mock.mock.calls[0] as [string, RequestInit]
    expect(JSON.parse(options.body as string)).toEqual(payload)
  })
})
