import { Container } from '@/components/layout/container'
import { ProductsList } from '@/components/products/products-list'
import { Error } from '@/components/ui/error'
import { getAccessories } from '@/lib/requests'

export default async function Accessories() {
  let products: Product[]
  try {
    products = await getAccessories()
  } catch {
    return <Error />
  }

  return (
    <Container>
      <div className="flex items-center justify-between border-b-[1px] border-b-neutral-400 pb-2 font-medium">
        <h2>Accessories</h2>
        <p>Get the Accessories you want!</p>
      </div>
      <p className="mt-4 font-semibold text-neutral-500">
        Showing all {products.length} results
      </p>
      <ProductsList products={products} />
    </Container>
  )
}
