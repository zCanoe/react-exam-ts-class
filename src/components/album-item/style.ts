import styled from "styled-components";

export const AlbumItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  margin-top: 20px;
  background-position: -260px 100px;

  > .top {
    position: relative;
    overflow: auto;

    > .cover {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background-position: 0 -570px;
    }
  }

  .name {
    width: 90%;
    margin-top: 7px;
    line-height: 18px;
    ${(props) => props.theme.mixin.textNoWrap}
  }

  .artist {
    color: #666;
    line-height: 18px;
    cursor: pointer;
    ${(props) => props.theme.mixin.textNoWrap}
  }
`;
