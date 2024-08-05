import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Djradio: React.FC<Props> = () => {
  return <div>Djradio</div>;
};

export default memo(Djradio);
