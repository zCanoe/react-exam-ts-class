import React from "react";
import { AudioWrapper, ControlWrapper, OperatorWrapper, PlayerWrapper } from "@/views/player/style";

function Player() {
  return (
    <PlayerWrapper className={"sprite_playbar"}>
      <div className="wrap-v2 content">
        <ControlWrapper>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </ControlWrapper>
        <AudioWrapper>
          <div className="left"></div>
          <div className="right"></div>
        </AudioWrapper>
        <OperatorWrapper></OperatorWrapper>
      </div>
    </PlayerWrapper>
  );
}

export default Player;
