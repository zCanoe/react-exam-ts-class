import React, { memo, ReactNode, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { shallowEqual } from "react-redux";
import { changeCount, countSelector } from "@/store/modules/counter";
import { IUseDispatch, IUseSelector } from "@/store";

interface Props {
  children?: ReactNode;
}

const Discover: React.FC<Props> = () => {
  const { count } = IUseSelector(countSelector, shallowEqual);
  const dispath = IUseDispatch();
  function handleClick() {
    dispath(changeCount(1));
  }
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/album">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/songs">新碟上架</Link>
      </div>
      {count}
      <button onClick={() => handleClick()}>change</button>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default memo(Discover);
