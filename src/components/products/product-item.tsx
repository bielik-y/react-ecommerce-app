'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormattedPrice } from '@/components/products/formatted-price'
import { Heart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { addToCart } from '@/redux/cart/cart-slice'
import { toast } from 'react-toastify'
import {
  addToWishlist,
  removeFromWishlist
} from '@/redux/wishlist/wishlist-slice'

interface ProductItemProps {
  product: Product
}

function ProductItem({ product }: ProductItemProps) {
  const wishlistData = useSelector(
    (state: RootState) => state.wishlist.wishlistData
  )
  const dispatch = useDispatch<AppDispatch>()

  const isFavorite = wishlistData.some((item) => item._id === product._id)

  return (
    <div className="group relative overflow-hidden border-[1px] border-neutral-300 bg-white transition focus-within:border-neutral-500 focus-within:shadow-xl hover:border-neutral-500 hover:shadow-xl">
      <Link href={{ pathname: '/product', query: { id: product._id } }}>
        <Image
          width={500}
          height={500}
          src={product.image}
          alt="Product image"
          className="h-80 w-full object-contain transition-transform group-focus-within:scale-105 group-hover:scale-105 lg:object-cover"
        />
      </Link>
      <Heart
        onClick={() => {
          if (isFavorite) {
            dispatch(removeFromWishlist(product))
            toast.success(`${product.title} is removed from wishlist!`)
          }
          else {
            dispatch(addToWishlist(product))
            toast.success(`${product.title} is added to wishlist!`)
          }
        }}
        fill={isFavorite ? "red" : "white"}
        className="absolute right-4 top-4 h-5 w-5 cursor-pointer text-neutral-700 transition hover:text-black"
      />
      <div className="bg-neutral-100 p-4 group-hover:bg-neutral-50 group-hover:shadow-xl">
        <p className="transition group-hover:text-primary">{product.title}</p>
        <FormattedPrice className="font-semibold" price={product.price} />
        <div className="mt-2 flex items-center justify-between text-sm font-medium">
          <button
            onClick={() => {
              dispatch(addToCart(product))
              toast.success(`${product.title} is added to cart!`)
            }}
            className="uppercase transition-colors hover:text-primary"
          >
            Add to cart
          </button>
          <Link
            href={{ pathname: '/product', query: { id: product._id } }}
            className="uppercase transition-colors hover:text-primary"
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  )
}

export { ProductItem }
