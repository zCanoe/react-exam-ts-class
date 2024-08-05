import React, { memo, ReactNode, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const Discover: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/album">专辑</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/songs">歌曲</Link>
      </div>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default memo(Discover);
