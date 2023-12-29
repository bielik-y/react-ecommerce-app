import { Banner } from '@/components/banner/banner'
import { Container } from '@/components/layout/container'
import { ProductsHeader } from '@/components/layout/products-header'
import { ProductsList } from '@/components/products/products-list'
import { getProducts } from '@/lib/requests'
import { Error } from '@/components/ui/error'

export default async function Home() {
  let products: Product[]
  try {
    products = await getProducts()
  } catch {
    return <Error />
  }

  return (
    <main className="h-full">
      <Banner />
      <Container>
        <ProductsHeader />
        <ProductsList products={products}/>
      </Container>
    </main>
  )
}
