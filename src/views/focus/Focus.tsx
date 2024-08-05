import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Focus: React.FC<Props> = () => {
  return <div>Focus</div>;
};

export default memo(Focus);
