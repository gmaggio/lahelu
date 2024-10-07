import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '@core/models/Post';
import PostsRepository from '@core/repository/posts/PostsRepository';

interface HomeState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

const initialState: HomeState = {
  posts: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const fetchPosts = createAsyncThunk(
  'home/fetchPosts',
  async (page: number, { rejectWithValue }) => {
    try {
      const posts = await PostsRepository.getPosts(page);
      return posts;
    } catch {
      return rejectWithValue('Failed to fetch posts');
    }
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
      state.page += 1;
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export default homeSlice.reducer;
