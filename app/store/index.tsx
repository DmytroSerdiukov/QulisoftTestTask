import {configureStore} from '@reduxjs/toolkit';
import {photoSlice} from './reducers/photos';

const store = configureStore({
  reducer: {
    photoReducer: photoSlice,
  },
});

export default store;
