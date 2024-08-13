import React, { memo, ReactNode } from "react";
import { AreaHeaderV1Wrapper } from "@/components/area-header-v1/style";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}

const AreaHeaderV1: React.FC<Props> = (props) => {
  const { title = "", keywords = [], moreText = "更多", moreLink = "/" } = props;
  return (
    <AreaHeaderV1Wrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keywords">
          {keywords.map((item, index) => (
            <div key={index} className="item">
              <Link className="link" to={moreLink} target={"_blank"}>
                {item}
              </Link>
              <span className="divide">|</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink} className="more">
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </AreaHeaderV1Wrapper>
  );
};

export default memo(AreaHeaderV1);
