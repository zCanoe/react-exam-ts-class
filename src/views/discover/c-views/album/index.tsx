import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Album: React.FC<Props> = () => {
  return <div>Album</div>;
};

export default memo(Album);
