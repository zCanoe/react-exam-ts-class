import styled from "styled-components";

interface TopProps {
  backgroundImage: string;
}
export const TopBannerWrapper = styled.div.attrs<TopProps>({})`
  transition: background 500ms linear;
  background: url(${(props: TopProps) => props.backgroundImage}) center center / 6000px;

  .banner {
    height: 285px;
    display: flex;
    position: relative;
  }
`;

export const LeftWrapper = styled.div`
  width: 730px;
  height: 100%;

  .imgItem {
    height: 285px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const RightWrapper = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 100%;
  background: url(${require("@/assets/img/download.png")});

  p {
    font-size: 12px;
    color: #aaa;
    position: absolute;
    bottom: 15px;
    width: inherit;
    display: flex;
    justify-content: center;
  }
`;

export const ControlWrapper = styled.div`
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
