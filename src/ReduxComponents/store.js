import { configureStore } from '@reduxjs/toolkit'
import counterReducer, {siteData, storeId} from "./CounterSlice"

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      siteData: siteData.reducer,
      storeId: storeId.reducer
  },
})