import styled from "styled-components";

export const PopularRadioWrapper = styled.div`
  margin-top: 30px;
  padding: 0px 20px;

  .content {
    margin-top: 20px;
    .item {
      height: 50px;
      display: flex;
      ${(props) => props.theme.mixin.textNoWrap}
      .avatar {
        margin-right: 10px;
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        .name {
          line-height: 21px;
          box-sizing: content-box;
          color: #000;
        }

        .alias {
          width: 160px;
          line-height: 21px;
          color: #666;
        }
      }
    }
  }
`;
