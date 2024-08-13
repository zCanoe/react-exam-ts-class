import React, { memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NewAlbum: React.FC<Props> = () => {
  return <div>NewAlbum</div>;
};

export default memo(NewAlbum);
