import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Artist: React.FC<Props> = () => {
  return <div>Artist</div>;
};

export default memo(Artist);
