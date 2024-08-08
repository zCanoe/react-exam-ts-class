import React, { memo, ReactNode } from "react";
import { NavWrapper } from "@/views/discover/c-cpns/nav-bar/style";
import { NavLink } from "react-router-dom";
import discoverTitles from "@/assets/data/discover-titles.json";

interface Props {
  children?: ReactNode;
}

const NavBar: React.FC<Props> = () => {
  const mapNav = (item: any): ReactNode => {
    return (
      <div key={item.link} className={"item"}>
        <NavLink to={item.link}>{item.title}</NavLink>
      </div>
    );
  };

  return (
    <NavWrapper>
      <div className="nav wrap-v1">{discoverTitles.map(mapNav)}</div>
    </NavWrapper>
  );
};

export default memo(NavBar);
