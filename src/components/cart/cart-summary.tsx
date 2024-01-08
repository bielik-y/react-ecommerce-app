'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { FormattedPrice } from '@/components/products/formatted-price'
import { toast } from 'react-toastify'
import { Loader2 } from 'lucide-react'

interface CartSummaryProps {
  products: Product[]
}

function CartSummary({ products }: CartSummaryProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [rowPrice, setRowPrice] = useState(0)

  const { data: session } = useSession()

  useEffect(() => {
    let tempTotalItems = 0
    let tempTotalPrice = 0
    let tempRowPrice = 0
    products.map((item: Product) => {
      tempTotalItems += item.quantity
      tempTotalPrice += item.price * item.quantity
      tempRowPrice += item.previousPrice * item.quantity
      return
    })
    setTotalItems(tempTotalItems)
    setTotalPrice(tempTotalPrice)
    setRowPrice(tempRowPrice)
  }, [products])

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY!
  )
  async function handleCheckout() {
    setIsLoading(true)
    const stripe = await stripePromise
    try {
      const { data } = await axios.post('/api/checkout', {
        items: products,
        email: session?.user?.email
      })
      console.log(data)
      stripe?.redirectToCheckout({ sessionId: data.id })
      // TODO: Store payment data in db
    } catch {
      toast.error('Oops, something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-4 flex max-w-xl flex-col gap-1 bg-white p-4">
      <p className="border-b-designColor border-b-[1px] py-1">Cart Summary</p>
      <p className="flex items-center justify-between">
        Total Items <span>{totalItems}</span>
      </p>
      <p className="flex items-center justify-between">
        Price{' '}
        <span>
          <FormattedPrice price={rowPrice} />
        </span>
      </p>
      <p className="flex items-center justify-between">
        Discount{' '}
        <span className="text-rose-600">
          <FormattedPrice price={rowPrice - totalPrice} />
        </span>
      </p>
      <p className="mt-4 flex items-center justify-between">
        Total Price{' '}
        <span>
          <FormattedPrice
            price={totalPrice}
            className="text-lg font-semibold"
          />
        </span>
      </p>
      <button
        onClick={handleCheckout}
        className="my-2 rounded-md bg-neutral-900 py-2 text-center font-medium uppercase text-neutral-200 duration-200 hover:bg-primary-dark hover:text-white"
      >
        {isLoading ? (
          <Loader2 className="mx-auto animate-spin text-white" />
        ) : (
          'Proceed to Checkout'
        )}
      </button>
    </div>
  )
}

export { CartSummary }
