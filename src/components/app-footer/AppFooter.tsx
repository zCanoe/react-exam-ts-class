import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AppFooter: React.FC<Props> = () => {
  return <div>AppFooter</div>;
};

export default memo(AppFooter);
