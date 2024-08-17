import React, { memo, ReactNode } from "react";
import { UserLoginWrapper } from "@/views/discover/c-views/recommend/c-cpns/user-login/style";

interface Props {
  children?: ReactNode;
}

const UserLogin: React.FC<Props> = () => {
  return (
    <UserLoginWrapper className="sprite_02">
      <div className="BCard">
        <img src={"https://music.163.com/style/web2/img/dis_vip_card.png"} />
      </div>
      <div className="botton">
        <div className="info">
          <span>登陆网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
        </div>
        <div className="sprite_02 btn">用户登陆</div>
      </div>
    </UserLoginWrapper>
  );
};

export default memo(UserLogin);
