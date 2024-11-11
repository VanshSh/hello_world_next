'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  { name: 'Blog', href: '/blog' },
  {
    name: 'Products',
    href: '/products',
  },
]
const HomePage = () => {
  const pathname = usePathname()
  return (
    <div>
      <h4 className='text-center'>Welcome home Vansh Sharma!</h4>
      <div className='px-2'>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href)

          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            >
              {link.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
