import { configureStore } from '@reduxjs/toolkit'
import counterReducer, {siteData} from "./CounterSlice"

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      siteData: siteData.reducer,
  },
})