export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <h2 className='bg-red-800'>feature products</h2>
    </>
  )
}
