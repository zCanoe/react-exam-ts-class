import React, { memo, ReactNode } from "react";
import { RankingItemWrapper } from "@/views/discover/c-views/recommend/c-cpns/hot-ranking/c-cpns/RankingItem/style";
import { formatImageUrl } from "@/util/format";

interface Props {
  children?: ReactNode;
  itemData?: any;
}

const RankingItem: React.FC<Props> = (props) => {
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="left">
          <img src={formatImageUrl(props.itemData.coverImgUrl, 80)} alt="" />
          <div className="sprite_cover msk"></div>
        </div>
        <div className="right">
          <h3 className="top">{props.itemData.name}</h3>
          <div className="operator">
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {props.itemData.tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="name">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <span>查看全部 &gt;</span>
      </div>
    </RankingItemWrapper>
  );
};

export default memo(RankingItem);
