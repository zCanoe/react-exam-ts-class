import React from "react";
import AreaHeaderV2 from "@/components/area-header-v2/AreaHeaderV2";
import { PopularRadioWrapper } from "@/views/discover/c-views/recommend/c-cpns/poular-radio/style";
import { formatImageUrl } from "@/util/format";

function PopularRadio() {
  const anchors: any[] = require("@/assets/data/hot-anchors.json");
  console.log(anchors);
  return (
    <PopularRadioWrapper>
      <AreaHeaderV2 title={"热门主播"} />
      <div className="content">
        {anchors.map((item) => {
          return (
            <div className={"item"} key={item.picUrl}>
              <div className="avatar">
                <img src={formatImageUrl(item.picUrl, 40)} alt="" />
              </div>
              <div className="info">
                <p className="name">{item.name}</p>
                <div className="alias">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </PopularRadioWrapper>
  );
}

export default PopularRadio;
