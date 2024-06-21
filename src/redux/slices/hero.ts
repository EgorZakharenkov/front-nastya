import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/axiosBase";

export const getHero = createAsyncThunk("posts/heroData", async () => {
  const { data } = await axios.get("/hero");
  return data.heroes;
});

type State = {
  heroes: any;
};
const initialState: State = {
  heroes: [],
};
const heroSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    removeHero(state, action) {
      state.heroes = state.heroes.filter(
        (item: any) => item._id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHero.fulfilled, (state, action) => {
      state.heroes = action.payload;
    });
  },
});

export const heroReducer = heroSlice.reducer;
export const { removeHero } = heroSlice.actions;
