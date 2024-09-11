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
  extraReducers: (builder) => {},
});

export const getAllProducts = createAsyncThunk(
  "GET/ALLPRODUCTS",
  async (thunkAPI) => {
    try {
      return await productServices.allProducts();
    } catch (error) {
      console.log(error.message);
      //     const message = error.response.data.message;
      //   return thunkAPI.rejectWithValue(message);
    }
  }
);

export default productSlice.reducer;
