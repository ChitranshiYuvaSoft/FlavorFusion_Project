import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productServices from "./productService";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    allProducts: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allProducts = action.payload;
        state.isError = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const getAllProducts = createAsyncThunk(
  "GET/ALLPRODUCTS",
  async (thunkAPI) => {
    try {
      return await productServices.allProducts();
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default productSlice.reducer;
