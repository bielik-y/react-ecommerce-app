import Link from 'next/link'
import { Container } from '@/components/layout/container'

export default function Cancel() {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Your Payment not accepted</h2>
        <p>Try later and continue Shopping with us</p>
        <div className="flex items-center gap-x-5">
          <Link href={'/cart'}>
            <button className="h-12 w-44 rounded-lg bg-black text-base font-semibold text-slate-100 duration-300 hover:bg-primary">
              View Cart
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
