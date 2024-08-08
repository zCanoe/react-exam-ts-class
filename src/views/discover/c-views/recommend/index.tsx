import React, { memo, ReactNode, useEffect } from "react";
import { IUseDispatch } from "@/store";
import { fetchBannerDataAction } from "@/views/discover/c-views/recommend/store";

interface Props {
  children?: ReactNode;
}

const Recommend: React.FC<Props> = () => {
  const dispatch = IUseDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);
  return <div>Recommend</div>;
};

export default memo(Recommend);
