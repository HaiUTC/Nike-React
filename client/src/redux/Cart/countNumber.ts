import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// Define a type for the slice state
interface countNumber {
    numCart: number,
  }
  
  // Define the initial state using that type
  const initialState: countNumber = {
    numCart:(typeof window !== "undefined") && JSON.parse(localStorage.getItem('numcart')) || 0,
  }

  export const countNumber = createSlice({
    name: 'countNumber',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeNumCart : (state, action) => {
            state.numCart = action.payload
            if (typeof window !== 'undefined') {
              localStorage.setItem('numcart', (state.numCart).toString())
          }
        }
     
    },
  })
export const { changeNumCart } = countNumber.actions

// Other code such as selectors can use the imported `RootState` type
export const numCart = (state: RootState) => state.countNumber.numCart
export default countNumber.reducer