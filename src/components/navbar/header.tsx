'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { NavItem } from '@/components/navbar/nav-item'
import { Heart, ShoppingBasket } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export const navigation = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Phones',
    href: '/phones'
  },
  {
    title: 'Phone Cases',
    href: '/phonecases'
  },
  {
    title: 'Watches',
    href: '/watches'
  },
  {
    title: 'Accessories',
    href: '/accessories'
  }
]

function Header() {
  const path = usePathname()
  const { data: session } = useSession()
  const productData = useSelector((state:RootState) => state.cart.productData)
  const wishlistData = useSelector((state:RootState) => state.wishlist.wishlistData)


  return (
    <header className="sticky top-0 z-50 h-20 w-full border-b border-neutral-300/50 bg-white/80 text-neutral-600 backdrop-blur-2xl xl:px-2">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4">
        <Link href="/">
          <Image
            className="opacity-80"
            src="logo.svg"
            alt="Logo"
            width={180}
            height={52}
          />
        </Link>
        <ul className="hidden items-center gap-5 text-sm font-semibold uppercase md:flex">
          {navigation.map((item, i) => (
            <Link key={i} href={item.href}>
              <NavItem title={item.title} isActive={item.href === path} />
            </Link>
          ))}
        </ul>
        <div className="flex gap-6">
          <Link
            href="/wishlist"
            className="group relative cursor-pointer transition"
          >
            <Badge count={wishlistData.length} />
            <Heart
              className={cn(
                'h-7 w-7 transition group-hover:text-black',
                path === '/wishlist' && 'text-primary group-hover:text-primary'
              )}
            />
          </Link>
          <Link
            href="/cart"
            className="group relative cursor-pointer transition"
          >
            <Badge count={productData.length} />
            <ShoppingBasket
              className={cn(
                'h-7 w-7 transition group-hover:text-black',
                path === '/cart' && 'text-primary group-hover:text-primary'
              )}
            />
          </Link>
          {session ? (
            <Link href="/profile" className='text-sm font-semibold uppercase'>
              <NavItem title="Profile" isActive={path === '/profile'} />
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-sm font-semibold uppercase"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

export { Header }
