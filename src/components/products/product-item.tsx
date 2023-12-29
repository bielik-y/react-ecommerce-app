import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FormattedPrice } from '@/components/products/formatted-price'

interface ProductItemProps {
  product: Product
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="group relative overflow-hidden border-[1px] border-neutral-300 bg-white transition focus-within:border-neutral-500 focus-within:shadow-xl hover:border-neutral-500 hover:shadow-xl">
      <Link href="">
        <Image
          width={500}
          height={500}
          src={product.image}
          alt="Product image"
          className="h-80 w-full object-contain transition-transform group-focus-within:scale-105 group-hover:scale-105 lg:object-cover"
        />
      </Link>
      <Heart
        fill="black"
        className="absolute right-4 top-4 h-5 w-5 cursor-pointer text-neutral-500 transition hover:text-black"
      />
      <div className="bg-neutral-100 p-4 group-hover:bg-neutral-50 group-hover:shadow-xl">
        <p className="transition group-hover:text-primary">{product.title}</p>
        <FormattedPrice className="font-semibold" price={product.price} />
        <div className='flex items-center justify-between text-sm mt-2 font-medium'>
          <button className='uppercase  hover:text-primary transition-colors'>Add to cart</button>
          <Link href='/' className='uppercase hover:text-primary transition-colors'>More info</Link>
        </div>
      </div>
    </div>
  )
}

export { ProductItem }
