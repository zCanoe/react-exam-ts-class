import React, { memo, ReactNode, useEffect } from "react";
import { IUseDispatch } from "@/store";
import { fetchBannerDataAction } from "@/views/discover/c-views/recommend/store";
import TopBanner from "@/views/discover/c-views/recommend/c-cpns/top-banner";

interface Props {
  children?: ReactNode;
}

const Recommend: React.FC<Props> = () => {
  const dispatch = IUseDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);
  return (
    <div>
      <TopBanner />
    </div>
  );
};

export default memo(Recommend);
