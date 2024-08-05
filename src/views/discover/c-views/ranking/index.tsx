import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Ranking: React.FC<Props> = () => {
  return <div>Ranking</div>;
};

export default memo(Ranking);
