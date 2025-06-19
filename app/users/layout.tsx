export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='text-3xl flex justify-center text-blue-500 h-screen bg-gray-100'>
      This is User Layout {children}
    </div>
  )
}
