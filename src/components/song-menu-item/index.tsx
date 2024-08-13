import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const SongMenuItem: React.FC<Props> = () => {
  return <div>SongMenuItem</div>;
};

export default memo(SongMenuItem);
