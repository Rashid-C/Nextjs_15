async function makePostRequest() {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Rashid Rayhan C' }),
  })
  const data = await res.json()
  return { data }
}

export default async function Friends() {
  const { data } = await makePostRequest()
  return (
    <div>
      <h1>Friends Page</h1>
      <p>This is the friends page.</p>
      <h2>{data.message}</h2>
    </div>
  )
}
