import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// Define a type for the slice state
interface ShowSearch {
    isShowSearchBox: boolean
  }
  
  // Define the initial state using that type
  const initialState: ShowSearch = {
    isShowSearchBox: false,
  }

  export const showSearchBox = createSlice({
    name: 'showSearch',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      toggleShowSearchBox: (state) => {
        state.isShowSearchBox = !state.isShowSearchBox
      },
    },
  })
export const { toggleShowSearchBox } = showSearchBox.actions

// Other code such as selectors can use the imported `RootState` type
export const isShowSearchBox = (state: RootState) => state.showSearch.isShowSearchBox

export default showSearchBox.reducer