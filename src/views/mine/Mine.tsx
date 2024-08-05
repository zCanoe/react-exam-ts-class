import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Mine: React.FC<Props> = () => {
  return <div>Mine</div>;
};

export default memo(Mine);
