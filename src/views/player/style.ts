import styled from "styled-components";

export const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 53px;
  width: 100vw;
  background-position: 0 0;
  background-repeat: repeat;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .content {
    height: 47px;
    color: white;
    display: flex;
    align-items: center;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 137px;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 -165px;
  }

  .next {
    background-position: -80px -130px;
  }
`;

export const AudioWrapper = styled.div``;

export const OperatorWrapper = styled.div``;
