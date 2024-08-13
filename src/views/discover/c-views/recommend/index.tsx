import React, { memo, ReactNode, useEffect } from "react";
import { IUseDispatch } from "@/store";
import {
  fetachRecommentdDataActions,
  fetchBannerDataAction,
} from "@/views/discover/c-views/recommend/store";
import TopBanner from "@/views/discover/c-views/recommend/c-cpns/top-banner";
import { RecommendWrapper } from "@/views/discover/c-views/recommend/style";
import HotRecommend from "@/views/discover/c-views/recommend/c-cpns/hot-recommend";
import NewAlbum from "@/views/discover/c-views/recommend/c-cpns/new-album";

interface Props {
  children?: ReactNode;
}

const Recommend: React.FC<Props> = () => {
  const dispatch = IUseDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetachRecommentdDataActions());
  }, []);
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className={"content wrap-v2"}>
        <div className="left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
