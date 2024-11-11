import { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: {
    default: 'Learning Nextjs',
    template: '%s | learning nextjs', // Here %s will get replaced by title in the child
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <header className='bg-blue-300 text-center mb-3 p-2 uppercase font-bold'>
          HEADER
        </header>
        {children}
        <footer className='bg-blue-300 text-center mt-3 p-2 uppercase font-bold '>
          Footer
        </footer>
      </body>
    </html>
  )
}
