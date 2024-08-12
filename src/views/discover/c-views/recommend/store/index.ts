import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanner } from "@/views/discover/c-views/recommend/service";
import { RootState } from "@/store";

export const fetchBannerDataAction = createAsyncThunk(
  "recommend/banner",
  async (arg, { dispatch }) => {
    const res: any = await getBanner();
    console.log(res);
    dispatch(changerBannerAction(res.banners));
    return res.banners;
  },
);

const slice = createSlice({
  name: "recommend",
  initialState: (): {
    banner: any[];
  } => ({
    banner: [],
  }),
  reducers: {
    changerBannerAction(state, { payload }) {
      state.banner = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, (state, action) => {
        console.log(state, action, 11);
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, action) => {
        console.log(state, action);
      })
      .addCase(fetchBannerDataAction.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export const recommendSelector = (state: RootState) => state.recommend;
export const { changerBannerAction } = slice.actions;
export default slice.reducer;
