import { ProductItem } from '@/components/products/product-item'

interface ProductList {
  products: Product[]
}

function ProductsList({ products }: ProductList) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  )
}

export { ProductsList }
