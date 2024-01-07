import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  productData: Product[]
  orderData: Product[]
}

const initialState: CartState = {
  productData: [],
  orderData: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Product) => item._id === action.payload._id
      )
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload._id
      )
    },
    resetCart: (state) => {
      state.productData = []
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Product) => item._id === action.payload._id
      )
      existingProduct && existingProduct.quantity++
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Product) => item._id === action.payload._id
      )
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1
      } else {
        existingProduct && existingProduct.quantity--
      }
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  resetCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions
export default cartSlice.reducer
