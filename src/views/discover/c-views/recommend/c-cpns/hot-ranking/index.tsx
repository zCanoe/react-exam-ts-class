import React, { memo, ReactNode } from "react";
import { HotRankingWrapper } from "@/views/discover/c-views/recommend/c-cpns/hot-ranking/style";
import AreaHeaderV1 from "@/components/area-header-v1/AreaHeaderV1";

interface Props {
  children?: ReactNode;
}

const HotRanking: React.FC<Props> = () => {
  return (
    <HotRankingWrapper>
      <AreaHeaderV1 title={"榜单"} moreLink={"/discover/ranking"} />
      <div className="content"></div>
    </HotRankingWrapper>
  );
};

export default memo(HotRanking);
