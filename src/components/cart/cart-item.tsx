import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { Minus, Plus, X } from 'lucide-react'
import { useAppDispatch } from '@/redux/store'
import { FormattedPrice } from '@/components/products/formatted-price'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from '@/redux/cart/cart-slice'

interface CartItemProps {
  product: Product
}

function CartItem({ product }: CartItemProps) {
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
                dispatch(removeFromCart(product)),
                  toast.success(`${product.title} is removed from Cart!`)
              }}
              className="h-4 w-4 cursor-pointer duration-200 hover:text-red-600"
            />
          </div>
          <Link className='flex flex-col sm:flex-row items-center' href={{ pathname: '/product', query: { id: product._id } }}>
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
        <td className="hidden px-6 py-4 sm:table-cell">
          <FormattedPrice price={product.price} />
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-4">
            <span className="inline-flex cursor-pointer items-center justify-center rounded-md border border-neutral-300 p-1 duration-200 hover:border-neutral-800">
              <Minus
                onClick={() =>
                  product.quantity > 1
                    ? dispatch(decreaseQuantity(product)) &&
                      toast.success('Quantity decreased Successfully!')
                    : toast.error('Can not delete less than 1')
                }
                className="h-3 w-3 sm:h-4 sm:w-4"
              />
            </span>
            <span className="font-semibold">{product.quantity}</span>
            <span className="inline-flex cursor-pointer items-center justify-center rounded-md border border-neutral-300 p-1 duration-200 hover:border-neutral-800">
              <Plus
                onClick={() => {
                  dispatch(increaseQuantity(product))
                  toast.success(`${product.title} quantity added`)
                }}
                className="h-3 w-3 sm:h-4 sm:w-4"
              />
            </span>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold">
          <FormattedPrice price={product.price * product.quantity} />
        </td>
      </tr>
    </tbody>
  )
}

export { CartItem }
