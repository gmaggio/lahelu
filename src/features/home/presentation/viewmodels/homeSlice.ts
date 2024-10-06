import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '@env';

interface Post {
  postID: string;
  userID: string;
  title: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  createTime: string;
  feed: string;
  media: string;
  mediaThumbnail: string;
  sensitive: string;
  mediaType: string;
  hashtags: string;
  userUsername: string;
  userAvatar: string;
}

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
      const response = await fetch(
        `${API_BASE_URL}/posts?_page=${page}&_limit=10`,
      );
      const data = await response.json();
      return data;
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
