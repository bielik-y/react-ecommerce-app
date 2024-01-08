'use client'

import Link from 'next/link'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { resetWishlist } from '@/redux/wishlist/wishlist-slice'
import { WishlistItem } from '@/components/wishlist/wishlist-item'

function WishlistContent() {
  const wishlistData = useAppSelector((state) => state.wishlist.wishlistData)
  const dispatch = useAppDispatch()

  function handleReset() {
    const isConfirmed = window.confirm(
      'Are you sure you want to reset your Wishlist'
    )
    if (isConfirmed) {
      dispatch(resetWishlist())
      toast.success('Wishlist Reset Successfully')
    }
  }

  if (wishlistData.length === 0)
    return (
      <div className="min-h-80 flex flex-col items-center justify-center gap-1 py-10">
        <p className="text-lg font-bold">Your Wishlist is Empty</p>
        <Link
          href={'/'}
          className="cursor-pointer text-sm font-medium uppercase underline underline-offset-2 duration-200 hover:text-primary"
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
              <th scope="col" className="px-6 py-3">
                Unit Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className='hidden sm:inline'>Previous Price</span>
              </th>
            </tr>
          </thead>
          {wishlistData.map((item: Product) => (
            <WishlistItem key={item._id} product={item} />
          ))}
        </table>
      </div>
      <button
        onClick={handleReset}
        className="mt-5 w-36 rounded-md bg-neutral-950 py-3 text-xs font-semibold uppercase text-neutral-100 duration-200 hover:bg-rose-600 hover:text-white"
      >
        Reset Wishlist
      </button>
    </div>
  )
}

export { WishlistContent }
