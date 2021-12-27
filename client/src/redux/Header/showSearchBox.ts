import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// Define a type for the slice state
interface ShowSearch {
    isShowSearchBox: boolean,
    isShowSearchBoxMb : boolean
  }
  
  // Define the initial state using that type
  const initialState: ShowSearch = {
    isShowSearchBox: false,
    isShowSearchBoxMb : false
  }

  export const showSearchBox = createSlice({
    name: 'showSearch',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      toggleShowSearchBox: (state) => {
        state.isShowSearchBox = !state.isShowSearchBox
      },
      toggleShowSearchBoxMb: (state) => {
        state.isShowSearchBoxMb = !state.isShowSearchBoxMb
      },
    },
  })
export const { toggleShowSearchBox,toggleShowSearchBoxMb } = showSearchBox.actions

// Other code such as selectors can use the imported `RootState` type
export const isShowSearchBox = (state: RootState) => state.showSearch.isShowSearchBox
export const isShowSearchBoxMb = (state: RootState) => state.showSearch.isShowSearchBoxMb
export default showSearchBox.reducer