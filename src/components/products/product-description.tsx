import { FormattedPrice } from '@/components/products/formatted-price'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

interface ProductDescriptionProps {
  product: Product
}

function ProductDescription({ product }: ProductDescriptionProps) {
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
        <Button className="w-40" text="Add to Cart" />
        <button className='bg-white rounded-md w-10 h-10 border border-neutral-200 group'><Heart fill='black' className='m-auto text-black w-5 h-5 group-hover:scale-125 transition-transform '/></button>
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
