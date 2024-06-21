import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/axiosBase";

export const getPosts = createAsyncThunk("posts/fetchPostsData", async () => {
  const { data } = await axios.get("/post");
  return data.posts;
});

type State = {
  posts: any;
};
const initialState: State = {
  posts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    removeItem(state, action) {
      state.posts = state.posts.filter(
        (item: any) => item._id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const postReducer = postSlice.reducer;
export const { removeItem } = postSlice.actions;
