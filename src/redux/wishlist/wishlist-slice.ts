import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  wishlistData: Product[]
}

const initialState: CartState = {
  wishlistData: []
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingProduct = state.wishlistData.find(
        (item: Product) => item._id === action.payload._id
      )
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
      } else {
        state.wishlistData.push(action.payload)
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistData = state.wishlistData.filter(
        (item) => item._id !== action.payload._id
      )
    },
    resetWishlist: (state) => {
      state.wishlistData = []
    }
  }
})
export const { addToWishlist, removeFromWishlist, resetWishlist } =
  wishlistSlice.actions
export default wishlistSlice.reducer
