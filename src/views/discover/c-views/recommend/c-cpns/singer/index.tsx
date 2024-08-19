import React, { FC, ReactNode } from "react";
import { SingerWrapper } from "@/views/discover/c-views/recommend/c-cpns/singer/style";
import AreaHeaderV2 from "@/components/area-header-v2/AreaHeaderV2";
import { IUseSelector } from "@/store";
import { recommendSelector } from "@/views/discover/c-views/recommend/store";
import { formatImageUrl } from "@/util/format";

interface IProps {
  children?: ReactNode;
}

const Singer: FC<IProps> = function () {
  const { singers } = IUseSelector(recommendSelector);
  return (
    <SingerWrapper>
      <AreaHeaderV2 title={"入驻歌手"} moreText={"查看全部>"} moreLink={"/"} />
      <div className="content">
        {singers.map((item) => {
          return (
            <div key={item.id} className={"item"}>
              <div className="avatar">
                <img src={formatImageUrl(item.picUrl, 62)} alt="" />
              </div>
              <div className="info">
                <h4 className="name">{item.name}</h4>
                <div className="alias">{item.alias.join(" ")}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  );
};

export default Singer;
