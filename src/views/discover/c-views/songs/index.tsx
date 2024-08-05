import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Songs: React.FC<Props> = () => {
  return <div>Songs</div>;
};

export default memo(Songs);
