import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {PhotosAPI} from '../../api';

const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (_, thunkAPI) => {
    const response = await PhotosAPI.fetchPhotos();
  },
);

interface InitState {
  photos: any[];
  error: any;
}

const initState: InitState = {
  photos: [],
  error: null,
};

export const photoSlice = createSlice({
  name: 'photos',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPhotos.pending, (state, action) => {}),
      builder.addCase(fetchPhotos.fulfilled, (state, action) => {
        state.photos = [...action.payload];
      }),
      builder.addCase(fetchPhotos.rejected, (state, action) => {});
  },
});

export default photoSlice.reducer;
