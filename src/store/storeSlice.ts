import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { StoreListType, fetchStoreAPI } from "../api/storeAPI"
import type { PayloadAction } from "@reduxjs/toolkit"

export const fetchStore = createAsyncThunk("store/fetchStore", async () => {
  const response = await fetchStoreAPI()
  return response.data
})

interface StoreState {
  fakeStore: StoreListType
}

const initialState = {
  fakeStore: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  },
} as StoreState

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchStore.fulfilled,
      (state, action: PayloadAction<StoreListType>): void => {
        state.fakeStore = action.payload
      },
    )
  },
})

export const storeReducer = storeSlice.reducer
