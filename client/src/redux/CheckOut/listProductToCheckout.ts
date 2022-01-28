import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// Define a type for the slice state
interface itemCheckout {
    price: number,
    listProduct : any
  }
  
  // Define the initial state using that type
  const initialState: itemCheckout = {
    price : 0,
    listProduct : []
  }

  export const checkoutItem = createSlice({
    name: 'checkoutItem',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateDataToCheckout : (state,action) => {
            state.price = action.payload.price
            state.listProduct = action.payload.listProduct
        },
        deleteDataCheckouted : (state) => {
          state.price = 0
          state.listProduct = []
      }
     
    },
  })
export const { updateDataToCheckout,deleteDataCheckouted } = checkoutItem.actions

// Other code such as selectors can use the imported `RootState` type
export const dataCheckout = (state: RootState) => state.checkout
export default checkoutItem.reducer