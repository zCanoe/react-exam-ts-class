import React, { memo, ReactNode, Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/views/discover/c-cpns/nav-bar";

interface Props {
  children?: ReactNode;
}

const Discover: React.FC<Props> = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default memo(Discover);
