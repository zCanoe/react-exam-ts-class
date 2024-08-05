import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Recommend: React.FC<Props> = () => {
  return <div>Recommend</div>;
};

export default memo(Recommend);
