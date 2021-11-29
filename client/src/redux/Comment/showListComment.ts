import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// Define a type for the slice state
interface showListComment {
    isShow: boolean,
  }
  
  // Define the initial state using that type
  const initialState: showListComment = {
    isShow : false
  }

  export const showList = createSlice({
    name: 'showListComment',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        showListComment : (state) => {
            state.isShow = true
        },
        hideListComment : (state) => {
          state.isShow = false
      }
     
    },
  })
export const { showListComment,hideListComment } = showList.actions

// Other code such as selectors can use the imported `RootState` type
export const isShow = (state: RootState) => state.showList.isShow
export default showList.reducer