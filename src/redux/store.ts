import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/redux/cart/cart-slice'
import wishlistReducer from '@/redux/wishlist/wishlist-slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from '@/redux/storage'

const cartPersistConfig = {
  key: 'cart',
  storage
}

const wishlistPersistConfig = {
  key: 'wishlist',
  storage
}

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export let persistor = persistStore(store)
