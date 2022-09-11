import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PhotosAPI } from '../../api'

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (_, thunkAPI) => {
    const response = await PhotosAPI.fetchPhotos()
    return response
  }
)

interface InitState {
  photos: any[]
  error: any
}

interface IAction {
  payload?: any
}

const initState = {
  photos: [],
  error: null,
}

export const photoSlice = createSlice({
  name: 'photos',
  initialState: initState as InitState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPhotos.fulfilled,
      (state: InitState, action: IAction) => {
        const data = JSON.parse(JSON.stringify(action.payload))
        state.photos = data
      }
    ),
      builder.addCase(
        fetchPhotos.rejected,
        (state: InitState, action: IAction) => {
          state.error = 'Something went wrong'
        }
      )
  },
})

export default photoSlice.reducer
