import { configureStore } from '@reduxjs/toolkit'
import countNumber from './Cart/countNumber'
import  checkoutItem  from './CheckOut/listProductToCheckout'
import showListComment from './Comment/showListComment'
import showSearchBox from './Header/showSearchBox'
import showFilter  from './Product/showFilter'


export const store = configureStore({
  reducer: {
   showSearch : showSearchBox,
   showFilter : showFilter,
   countNumber : countNumber,
   showList : showListComment,
   checkout : checkoutItem
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch