import React, { memo, ReactNode } from "react";
import { HotReWrapper } from "@/views/discover/c-views/recommend/c-cpns/hot-recommend/style";
import AreaHeaderV1 from "@/components/area-header-v1/AreaHeaderV1";
interface Props {
  children?: ReactNode;
}

const HotRecommend: React.FC<Props> = () => {
  return (
    <HotReWrapper>
      <AreaHeaderV1
        title="热歌推荐"
        keywords={["话语", "流行", "摇滚", "民谣", "电子"]}
        moreLink={"/discover/songs"}
      ></AreaHeaderV1>
    </HotReWrapper>
  );
};

export default memo(HotRecommend);
