import React, { ElementRef, memo, ReactNode, useRef } from "react";
import { NewAlbumWrapper } from "@/views/discover/c-views/recommend/c-cpns/new-album/style";
import AreaHeaderV1 from "@/components/area-header-v1/AreaHeaderV1";
import { Carousel } from "antd";
import { recommendSelector } from "@/views/discover/c-views/recommend/store";
import { IUseSelector } from "@/store";
import AlbumItem from "@/components/album-item";

interface Props {
  children?: ReactNode;
}

const NewAlbum: React.FC<Props> = () => {
  const { newAlbums } = IUseSelector(recommendSelector);
  const carouseRef = useRef<ElementRef<typeof Carousel>>(null);

  const handlePreBtnClick = () => {
    carouseRef.current?.prev();
  };

  const handleNextBtnClick = () => {
    carouseRef.current?.next();
  };

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title={"新碟上架"} moreLink={"/discover/songs"} />
      <div className="content">
        <div className="btn left">
          <span className="sprite_02 arrow leftArrow" onClick={handlePreBtnClick} />
        </div>
        <div className="carousel">
          <Carousel ref={carouseRef} autoplay>
            {[0, 1].map((item) => (
              <div key={item}>
                <div className="albums">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((item: any) => (
                    <AlbumItem
                      key={item.id}
                      name={item.name}
                      artist={item.artist}
                      picUrl={item.picUrl}
                    />
                  ))}{" "}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="btn right">
          <span className="sprite_02 arrow rightArrow" onClick={handleNextBtnClick} />
        </div>
      </div>
    </NewAlbumWrapper>
  );
};

export default memo(NewAlbum);
