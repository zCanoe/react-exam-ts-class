import React, { memo, ReactNode, useEffect } from "react";
import { IUseDispatch } from "@/store";
import { fetchBannerDataAction } from "@/views/discover/c-views/recommend/store";
import TopBanner from "@/views/discover/c-views/recommend/c-cpns/top-banner";
import { RecommendWrapper } from "@/views/discover/c-views/recommend/style";
import HotRecommend from "@/views/discover/c-views/recommend/c-cpns/hot-recommend";

interface Props {
  children?: ReactNode;
}

const Recommend: React.FC<Props> = () => {
  const dispatch = IUseDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className={"content wrap-v2"}>
        <div className="left">
          <HotRecommend />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
