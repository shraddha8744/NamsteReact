import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from '../slice/menuSlice'
export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer
  }
})