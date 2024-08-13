import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanner, getHotRecommend } from "@/views/discover/c-views/recommend/service";
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

export const fetachRecommentdDataActions = createAsyncThunk(
  "recommend/recommendData",
  async (arg, { dispatch }) => {
    const res: any = await getHotRecommend();
    console.log(res);
    dispatch(changeRecommendAction(res.result));
  },
);

const slice = createSlice({
  name: "recommend",
  initialState: (): {
    banner: any[];
    recommendList: any[];
  } => ({
    banner: [],
    recommendList: [],
  }),
  reducers: {
    changerBannerAction(state, { payload }) {
      state.banner = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.recommendList = payload;
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
export const { changerBannerAction, changeRecommendAction } = slice.actions;
export default slice.reducer;
