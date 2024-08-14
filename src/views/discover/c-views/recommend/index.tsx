import React, { memo, ReactNode, useEffect } from "react";
import { IUseDispatch } from "@/store";
import {
  fetachRecommentdDataActions,
  fetchAlbumNewestActions,
  fetchBannerDataAction,
  fetchRankingListActions,
} from "@/views/discover/c-views/recommend/store";
import TopBanner from "@/views/discover/c-views/recommend/c-cpns/top-banner";
import { RecommendWrapper } from "@/views/discover/c-views/recommend/style";
import HotRecommend from "@/views/discover/c-views/recommend/c-cpns/hot-recommend";
import NewAlbum from "@/views/discover/c-views/recommend/c-cpns/new-album";
import HotRanking from "@/views/discover/c-views/recommend/c-cpns/hot-ranking";

interface Props {
  children?: ReactNode;
}

const Recommend: React.FC<Props> = () => {
  const dispatch = IUseDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetachRecommentdDataActions());
    dispatch(fetchAlbumNewestActions());
    dispatch(fetchRankingListActions());
  }, []);
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className={"content wrap-v2"}>
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <HotRanking />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
