import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// Define a type for the slice state
interface ShowSearch {
    isShowFilter: boolean,
  }
  
  // Define the initial state using that type
  const initialState: ShowSearch = {
    isShowFilter: true,
  }

  export const showFilters = createSlice({
    name: 'showFilter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      toggleShowFilter: (state) => {
        state.isShowFilter = !state.isShowFilter
      },
    },
  })
export const { toggleShowFilter } = showFilters.actions

// Other code such as selectors can use the imported `RootState` type
export const isShowFilter = (state: RootState) => state.showFilter.isShowFilter
export default showFilters.reducer