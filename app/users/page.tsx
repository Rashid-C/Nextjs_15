export default async function Users() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  type User = {
    id: number
    name: string
  }
  return (
    <div className='text-3xl flex justify-center text-green-500 '>
      Users page
      <ul className='list-disc'>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
