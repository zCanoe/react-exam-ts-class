import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const RankingItem: React.FC<Props> = () => {
  return <div>RankingItem</div>;
};

export default memo(RankingItem);
