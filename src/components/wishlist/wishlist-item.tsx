import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { Plus, ShoppingCart, X } from 'lucide-react'
import { useAppDispatch } from '@/redux/store'
import { addToCart } from '@/redux/cart/cart-slice'
import { FormattedPrice } from '@/components/products/formatted-price'
import { removeFromWishlist } from '@/redux/wishlist/wishlist-slice'

interface WishlistItemProps {
  product: Product
}

function WishlistItem({ product }: WishlistItemProps) {
  const dispatch = useAppDispatch()

  return (
    <tbody>
      <tr className="border-b-[1px] border-b-neutral-300 bg-white">
        <th
          scope="row"
          className="flex flex-col items-center gap-3 px-6 py-4 sm:flex-row"
        >
          <div className="flex w-full items-start sm:w-fit">
            <X
              onClick={() => {
                dispatch(removeFromWishlist(product)),
                  toast.success(`${product.title} is removed from Wishlist!`)
              }}
              className="h-4 w-4 cursor-pointer duration-200 hover:text-red-600"
            />
          </div>
          <Link
            className="flex flex-col items-center sm:flex-row"
            href={{ pathname: '/product', query: { id: product._id } }}
          >
            <Image
              src={product.image}
              alt="Product image"
              width={500}
              height={500}
              className="w-24 object-contain"
            />

            <p className="text-base font-medium text-black">{product.title}</p>
          </Link>
        </th>
        <td className="px-6 py-4">
          <FormattedPrice price={product.price} />
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <FormattedPrice
              className="hidden font-semibold text-neutral-800 line-through sm:block"
              price={product.previousPrice}
            />
            <button
              onClick={() => {
                dispatch(addToCart(product))
                toast.success(`${product.title} is added to cart!`)
              }}
              className="w-14 rounded-md bg-primary p-2 transition-colors hover:bg-primary-dark"
            >
              <div className="text-white">
                <Plus className="m inline h-4 w-4" />
                <ShoppingCart className="inline" />
              </div>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export { WishlistItem }
