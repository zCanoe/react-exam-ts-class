import React, { memo, ReactNode } from "react";
import { BottomItem, SongMenuItemWrapper, TopItem } from "@/components/song-menu-item/style";
import { formatCount, formatImageUrl } from "@/util/format";

interface Props {
  children?: ReactNode;
  picUrl: string;
  name: string;
  playCount: number;
}

const SongMenuItem: React.FC<Props> = (
  props: Props = {
    picUrl: "",
    name: "",
    playCount: 0,
  },
) => {
  return (
    <SongMenuItemWrapper>
      <TopItem>
        <img src={formatImageUrl(props.picUrl, 140)} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span>{formatCount(props.playCount)}</span>
            </span>
            <span>
              <i className="sprite_icon play"></i>
            </span>
          </div>
        </div>
      </TopItem>
      <BottomItem>{props.name}</BottomItem>
    </SongMenuItemWrapper>
  );
};

export default memo(SongMenuItem);
