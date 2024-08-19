import React, { FC, ReactNode } from "react";
import { AreaHeaderV2Wrapper } from "@/components/area-header-v2/style";
import { Link } from "react-router-dom";

interface IProps {
  children?: ReactNode;
  title: string;
  moreLink?: string;
  moreText?: string;
}
const AreaHeaderV2: FC<IProps> = (
  props = {
    title: "",
    moreLink: "",
    moreText: "查看全部",
  },
) => {
  return (
    <AreaHeaderV2Wrapper>
      <div className="left">{props.title}</div>
      <div className="right">
        {props.moreLink && <Link to={props.moreLink}>{props.moreText}</Link>}
      </div>
    </AreaHeaderV2Wrapper>
  );
};

export default AreaHeaderV2;
