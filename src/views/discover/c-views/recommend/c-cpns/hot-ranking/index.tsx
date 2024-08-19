import React, { memo, ReactNode } from "react";
import { HotRankingWrapper } from "@/views/discover/c-views/recommend/c-cpns/hot-ranking/style";
import AreaHeaderV1 from "@/components/area-header-v1/AreaHeaderV1";
import { IUseSelector } from "@/store";
import { recommendSelector } from "@/views/discover/c-views/recommend/store";
import RankingItem from "@/views/discover/c-views/recommend/c-cpns/hot-ranking/c-cpns/RankingItem";

interface Props {
  children?: ReactNode;
}

const HotRanking: React.FC<Props> = () => {
  const { ranking } = IUseSelector(recommendSelector);

  return (
    <HotRankingWrapper>
      <AreaHeaderV1 title={"榜单"} moreLink={"/discover/ranking"} />
      <div className="content">
        {ranking.map((item, index) => {
          return item && <RankingItem key={index} itemData={item?.playlist} />;
        })}
      </div>
    </HotRankingWrapper>
  );
};

export default memo(HotRanking);
