import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getBanner,
  getHotRecommend,
  getNewAlbum,
} from "@/views/discover/c-views/recommend/service";
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

export const fetchAlbumNewestActions = createAsyncThunk(
  "recommend/albumNewest",
  async (arg, { dispatch }) => {
    const res: any = await getNewAlbum();
    console.log(res);
    dispatch(changeNewAlbumsActions(res.albums));
  },
);

const slice = createSlice({
  name: "recommend",
  initialState: (): {
    banner: any[];
    recommendList: any[];
    newAlbums: any[];
  } => ({
    banner: [],
    recommendList: [],
    newAlbums: [],
  }),
  reducers: {
    changerBannerAction(state, { payload }) {
      state.banner = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.recommendList = payload;
    },
    changeNewAlbumsActions(state, { payload }) {
      state.newAlbums = payload;
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
export const { changerBannerAction, changeRecommendAction, changeNewAlbumsActions } = slice.actions;
export default slice.reducer;
