import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App with TypeScript',
  description: 'Created user page by nextjs',
}
async function fetchuser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if (!res.ok) {
    return null
  }
  const users = await res.json()

  return users
}
export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  const { userId } = await params
  const user = await fetchuser(userId)

  if (!user) {
    notFound()
  }
  return (
    <div>
      <h1>User name: {user?.name}</h1>
      <p>
        <strong>Email:{user?.email}</strong>
      </p>
      <p>
        <strong>Phone:{user?.phone}</strong>
      </p>{' '}
      <p>
        <strong>Website:{user?.website}</strong>
      </p>{' '}
      <p>
        <strong>Company:{user?.company?.name ?? 'nothing'}</strong>
      </p>
      <p>
        <strong>
          Address:{user?.address?.street ?? 'nothing'} &&{' '}
          {user?.address?.city ?? 'city'}
        </strong>
      </p>
    </div>
  )
}
