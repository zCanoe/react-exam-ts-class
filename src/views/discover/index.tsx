import React, { memo, ReactNode, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { shallowEqual } from "react-redux";
import { changeCount, countSelector } from "@/store/modules/counter";
import { IUseDispatch, IUseSelector } from "@/store";
import NavBar from "@/views/discover/c-cpns/nav-bar";

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
      <NavBar />
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
