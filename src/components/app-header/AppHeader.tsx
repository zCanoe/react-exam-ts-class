import React, { memo, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "@/components/app-header/style";
import headerTitles from "@/assets/data/header-titles.json";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
interface Props {
  children?: ReactNode;
}

const AppHeader: React.FC<Props> = () => {
  const mapHeaderTitles = (item: any): ReactNode => {
    if (item.type === "path") {
      return (
        <div className={"item"} key={item.link}>
          <NavLink to={item.link}>
            {item.title}
            <i className={"icon sprite_01"}></i>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className={"item"} key={item.link}>
          <a rel="noreferrer" href={item.link} target={"_blank"}>
            {item.title}
          </a>
        </div>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <div className={"logo sprite_01"}>
            <a href={"/"}>网易云音乐</a>
          </div>
          <div className={"title-list"}>{headerTitles.map(mapHeaderTitles)}</div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className={"search"}
            size="large"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className={"center"}>创作者中心</span>
          <span className={"sign"}>登陆</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
