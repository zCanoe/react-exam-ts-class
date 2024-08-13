import React, { memo, ReactNode } from "react";
import { HotReWrapper } from "@/views/discover/c-views/recommend/c-cpns/hot-recommend/style";
import AreaHeaderV1 from "@/components/area-header-v1/AreaHeaderV1";
import SongMenuItem from "@/components/song-menu-item";
import { IUseSelector } from "@/store";
import { recommendSelector } from "@/views/discover/c-views/recommend/store";
interface Props {
  children?: ReactNode;
}

const HotRecommend: React.FC<Props> = () => {
  const { recommendList } = IUseSelector(recommendSelector);
  return (
    <HotReWrapper>
      <AreaHeaderV1
        title="热歌推荐"
        keywords={["话语", "流行", "摇滚", "民谣", "电子"]}
        moreLink={"/discover/songs"}
      ></AreaHeaderV1>
      <div className="recommend">
        {recommendList.map((item) => {
          return (
            <SongMenuItem
              key={item.id}
              name={item.name}
              picUrl={item.picUrl}
              playCount={item.playCount}
            />
          );
        })}
      </div>
    </HotReWrapper>
  );
};

export default memo(HotRecommend);
