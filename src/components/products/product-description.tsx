'use client'

import { FormattedPrice } from '@/components/products/formatted-price'
import { Button } from '@/components/ui/button'
import { addToCart } from '@/redux/cart/cart-slice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { Heart } from 'lucide-react'
import { toast } from 'react-toastify'
import {
  addToWishlist,
  removeFromWishlist
} from '@/redux/wishlist/wishlist-slice'

interface ProductDescriptionProps {
  product: Product
}

function ProductDescription({ product }: ProductDescriptionProps) {
  const wishlistData = useAppSelector((state) => state.wishlist.wishlistData)
  const dispatch = useAppDispatch()

  const isFavorite = wishlistData.some((item) => item._id === product._id)

  return (
    <div className="flex w-full flex-col gap-2 bg-neutral-50 px-12 pb-10 md:w-1/2 md:p-10">
      <h2 className="text-3xl font-semibold">{product.title}</h2>
      <p className="flex items-center gap-10">
        <FormattedPrice
          className="text-2xl font-semibold text-rose-500"
          price={product.price}
        />
        <FormattedPrice
          className="text-lg text-neutral-500 line-through"
          price={product.previousPrice}
        />
      </p>
      <div className="my-8 flex gap-4">
        <Button
          onClick={() => {
            dispatch(addToCart(product))
            toast.success(`${product.title} is added to cart!`)
          }}
          className="w-40"
          text="Add to Cart"
        />
        <button className="group h-10 w-10 rounded-md border border-neutral-200 bg-white">
          <Heart
            onClick={() => {
              if (isFavorite) {
                dispatch(removeFromWishlist(product))
                toast.success(`${product.title} is removed from wishlist!`)
              } else {
                dispatch(addToWishlist(product))
                toast.success(`${product.title} is added to wishlist!`)
              }
            }}
            fill={isFavorite ? 'red' : 'white'}
            className="m-auto h-5 w-5 text-black transition-transform group-hover:scale-125 "
          />
        </button>
      </div>
      <p>
        <span className="font-semibold">Brand: </span>
        {product.brand}
      </p>
      <p>
        <span className="font-semibold">Category: </span>
        {product.category}
      </p>
      <p>
        <span className="font-semibold">Description: </span>
        {product.description}
      </p>
    </div>
  )
}

export { ProductDescription }
