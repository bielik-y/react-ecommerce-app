import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY!)

  try {
    const { items, email } = await req.json()

    const stripeData = items.map((item: Product) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image]
        }
      }
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: stripeData,
      mode: 'payment',
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: {
        email
      }
    })

    if (!session)
      return NextResponse.json(
        { message: 'Establishing connection with Stripe failed' },
        { status: 500 }
      )

    return NextResponse.json({
      message: 'Connection is Active',
      success: true,
      id: session.id
    })
  } catch (err: any) {
    return NextResponse.json({ message: err?.message }, { status: 500 })
  }
}
