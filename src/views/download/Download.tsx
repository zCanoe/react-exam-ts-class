import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Download: React.FC<Props> = () => {
  return <div>Download</div>;
};

export default memo(Download);
