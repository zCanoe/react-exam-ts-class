import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getArtistList,
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getRankingList,
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

export const fetchRankingListActions = createAsyncThunk(
  "recommend/ranking",
  async (arg, { dispatch }) => {
    const rankingIds = [19723756, 3779629, 2884035];
    const promise: Promise<any>[] = [];
    rankingIds.forEach((item) => {
      promise.push(getRankingList(item));
    });
    const res = await Promise.all(promise);

    console.log(res);
    dispatch(changeRankingActions(res));
  },
);

export const fetchArtistList = createAsyncThunk(
  "recommend/artistList",
  async (arg, { dispatch }) => {
    const res = await getArtistList(5);
    dispatch(changeRankingSingersAction(res.artists));
  },
);

const slice = createSlice({
  name: "recommend",
  initialState: (): {
    banner: any[];
    recommendList: any[];
    newAlbums: any[];
    ranking: any[];
    singers: any[];
  } => ({
    banner: [],
    recommendList: [],
    newAlbums: [],
    ranking: [],
    singers: [],
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
    changeRankingActions(state, { payload }) {
      state.ranking = payload;
    },
    changeRankingSingersAction(state, { payload }) {
      state.singers = payload;
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
export const {
  changerBannerAction,
  changeRecommendAction,
  changeNewAlbumsActions,
  changeRankingActions,
  changeRankingSingersAction,
} = slice.actions;
export default slice.reducer;
