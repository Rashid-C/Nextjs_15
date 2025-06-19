'use client'
export default function ButtonComponent() {
  return (
    <div className='flex justify-center  h-screen bg-gray-100'>
      <button
        onClick={() => alert('Clicked me')}
        className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300'
      >
        Click me
      </button>
    </div>
  )
}
