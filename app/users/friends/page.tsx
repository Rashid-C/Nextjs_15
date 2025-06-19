'use client'
import { useState } from 'react'

async function makePostRequest() {
  const res = await fetch(`/api/hello`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Rashid Rayhan C' }),
  })
  const data = await res.json()
  return { data }
}

export default function Friends() {
  const [message, setMessage] = useState('')
  const onClick = async () => {
    const { data } = await makePostRequest()
    setMessage(data.message)
  }
  return (
    <div>
      <h1>Friends Page</h1>
      <p>This is the friends page.</p>
      <h2>{message}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}
