import axios from 'axios'

export async function getProducts() {
  const { data } = await axios.get('https://jsonserver.reactbd.com/amazonpro')
  return data
}

// Json server has no route with getting one product by id
export async function getProductById(id: number) {
  const products: Product[] = await getProducts()
  return products.find((item) => item._id === id)
}

export async function getPhones() {
  const { data } = await axios.get(
    'https://jsonserver.reactbd.com/amazonpro/category/phone'
  )
  return data
}

export async function getPhoneCases() {
  const { data } = await axios.get(
    'https://jsonserver.reactbd.com/amazonpro/category/phone case'
  )
  return data
}

export async function getWatches() {
  const { data } = await axios.get(
    'https://jsonserver.reactbd.com/amazonpro/category/watch'
  )
  return data
}

export async function getAccessories() {
  const { data } = await axios.get(
    'https://jsonserver.reactbd.com/amazonpro/category/accessories'
  )
  return data
}
