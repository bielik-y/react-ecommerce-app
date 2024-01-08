'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Container } from '@/components/layout/container'
import { useAppDispatch } from '@/redux/store'
import { resetCart } from '@/redux/cart/cart-slice'

export default function Success() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetCart())
  }, [dispatch])

  return (
    <Container className="flex items-center justify-center py-20">
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">
          Your Payment Accepted by techstore.com
        </h2>
        <p>Now you can view your Wishlist or continue Shopping with us</p>
        <div className="flex items-center gap-x-5">
          <Link href={'/wishlist'}>
            <button className="h-12 w-44 rounded-lg bg-black text-base font-semibold text-slate-100 duration-300 hover:bg-primary">
              View wishlist
            </button>
          </Link>
          <Link href={'/'}>
            <button className="h-12 w-44 rounded-lg bg-black text-base font-semibold text-slate-100 duration-300 hover:bg-primary">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
