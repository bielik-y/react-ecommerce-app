import Image from 'next/image'
import { getProductById } from '@/lib/requests'
import { Error } from '@/components/ui/error'
import { Container } from '@/components/layout/container'
import { ProductDescription } from '@/components/products/product-description'

export default async function ProductPage({ searchParams }: SearchParams) {
  const id = Number(searchParams?.id as string)

  let product
  try {
    product = await getProductById(id)
  } catch {
    return <Error />
  }

  if (!product) {
    return <Error text="Product not found" />
  }
  return (
    <Container className="flex flex-col items-stretch px-4 md:flex-row">
      <div className="flex w-full items-center justify-center overflow-hidden bg-neutral-50 p-10 md:w-1/2">
        <Image
          src={product.image}
          alt="Product image"
          width={480}
          height={480}
          className="transition-transform hover:scale-110"
        />
      </div>
      <ProductDescription product={product} />
    </Container>
  )
}
