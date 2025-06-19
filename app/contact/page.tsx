import ButtonComponet from './button'

export default async function Contact() {
  console.log('Contact page rendered in  client')
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  console.log(posts)

  return (
    <div className='text-3xl flex  text-blue-500'>
      Contact page
      <ButtonComponet />
    </div>
  )
}
