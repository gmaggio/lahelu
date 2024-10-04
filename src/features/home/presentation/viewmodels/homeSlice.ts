import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface HomeState {
  products: Product[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

const initialState: HomeState = {
  products: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const fetchProducts = createAsyncThunk(
  "home/fetchProducts",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.example.com/products?page=${page}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to fetch products");
    }
  },
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...state.products, ...action.payload];
      state.loading = false;
      state.page += 1;
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export default homeSlice.reducer;
