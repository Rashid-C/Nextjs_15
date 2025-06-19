import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='text-3xl flex justify-center text-red-500 h-screen bg-gray-100'>
      <h1>404 - Page Not Found</h1>
      <Link href='/'>Go to Home</Link>
    </div>
  )
}
