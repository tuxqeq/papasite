import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 pt-16">
      <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">404</p>
      <div className="w-16 h-1 bg-brand-purple mb-8 mx-auto" />
      <h1 className="text-7xl lg:text-9xl font-black uppercase text-white mb-6">Not Found</h1>
      <p className="text-gray-400 text-xl mb-10 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  )
}
