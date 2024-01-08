'use client'

import Link from 'next/link'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { CartItem } from '@/components/cart/cart-item'
import { resetCart } from '@/redux/cart/cart-slice'
import { CartSummary } from '@/components/cart/cart-summary'

function CartContent() {
  const productData = useAppSelector((state) => state.cart.productData)
  const dispatch = useAppDispatch()
  const router = useRouter()

  function handleReset() {
    const isConfirmed = window.confirm(
      'Are ypu sure you want to reset your Cart'
    )
    if (isConfirmed) {
      dispatch(resetCart())
      toast.success('Cart Reset Successfully')
      router.push('/')
    }
  }

  if (productData.length === 0)
    return (
      <div className="min-h-80 flex flex-col items-center justify-center gap-1 py-10">
        <p className="text-lg font-bold">Your Cart is Empty</p>
        <Link
          href={'/'}
          className="hover:text-primary cursor-pointer text-sm font-medium uppercase underline underline-offset-2 duration-200"
        >
          Go back to Shopping
        </Link>
      </div>
    )

  return (
    <div className="mt-5 flex flex-col">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-950 text-xs uppercase text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Information
              </th>
              <th scope="col" className="hidden px-6 py-3 sm:table-cell">
                Unit Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                SubTotal
              </th>
            </tr>
          </thead>
          {productData.map((item: Product) => (
            <CartItem key={item._id} product={item} />
          ))}
        </table>
      </div>
      <button
        onClick={handleReset}
        className="mt-5 w-36 rounded-md bg-neutral-950 py-3 text-xs font-semibold uppercase text-neutral-100 duration-200 hover:bg-rose-600 hover:text-white"
      >
        Reset Cart
      </button>
      <CartSummary products={productData}/>
    </div>
  )
}

export { CartContent }
