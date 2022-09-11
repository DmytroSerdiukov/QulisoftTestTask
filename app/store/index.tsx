import { configureStore } from '@reduxjs/toolkit'
import photoSlice from './reducers/photos'

const store = configureStore({
  reducer: {
    photos: photoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
