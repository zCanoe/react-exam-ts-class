import React, { ElementRef, memo, ReactNode, useRef, useState } from "react";
import {
  ControlWrapper,
  LeftWrapper,
  RightWrapper,
  TopBannerWrapper,
} from "@/views/discover/c-views/recommend/c-cpns/top-banner/style";
import { Carousel } from "antd";
import { IUseSelector } from "@/store";
import { recommendSelector } from "@/views/discover/c-views/recommend/store";

interface Props {
  children?: ReactNode;
}

const TopBanner: React.FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);

  const onAfterChange = (currentSlide: number) => {
    setCurrentIndex(currentSlide);
  };
  const handlePre = () => {
    carouselRef?.current?.prev();
  };
  const handleNext = () => {
    carouselRef?.current?.next();
  };
  const { banner } = IUseSelector(recommendSelector);
  const bannerCb = (item: any) => {
    return (
      <div className={"imgItem"} key={item.imageUrl}>
        <img src={item.imageUrl} alt={item.targetId} />
      </div>
    );
  };
  const topBg = () =>
    banner.length ? `${banner[currentIndex].imageUrl}?imageView&blur=40x20` : "";
  return (
    <TopBannerWrapper backgroundImage={topBg()}>
      <div className="banner wrap-v2">
        <LeftWrapper>
          <Carousel ref={carouselRef} autoplay dots fade afterChange={onAfterChange}>
            {banner.map(bannerCb)}
          </Carousel>
        </LeftWrapper>
        <RightWrapper>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </RightWrapper>
        <ControlWrapper>
          <button className="btn left" onClick={handlePre}></button>
          <button className="btn right" onClick={handleNext}></button>
        </ControlWrapper>
      </div>
    </TopBannerWrapper>
  );
};

export default memo(TopBanner);
