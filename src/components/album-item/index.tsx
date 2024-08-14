import React, { memo, ReactNode } from "react";
import { AlbumItemWrapper } from "@/components/album-item/style";
import { formatImageUrl } from "@/util/format";

interface artist {
  name: string;
}
interface Props {
  children?: ReactNode;
  picUrl: string;
  name: string;
  artist: artist;
}

const AlbumItem: React.FC<Props> = (
  props = {
    picUrl: "",
    name: "",
    artist: {
      name: "",
    },
  },
) => {
  return (
    <AlbumItemWrapper className="sprite_02">
      <div className="top">
        <img src={formatImageUrl(props.picUrl, 100)} />
        <div className="cover sprite_cover"></div>
      </div>
      <div className="name">{props.name}</div>
      <div className="artist">
        <a>{props.artist.name}</a>
      </div>
    </AlbumItemWrapper>
  );
};

export default memo(AlbumItem);
