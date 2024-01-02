type Product = {
  _id: number
  title: string
  description: string
  image: string
  price: number
  isNew: boolean
  brand: string
  category: string
  quantity: number
  previousPrice: number
}

type SearchParams = {
  searchParams: { [key: string]: string | string[] | undefined }
}
