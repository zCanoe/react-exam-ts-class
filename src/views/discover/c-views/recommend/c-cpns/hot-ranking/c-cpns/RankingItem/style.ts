import styled from "styled-components";

export const RankingItemWrapper = styled.div`
  width: 230px;
  flex-shrink: 0;
  box-sizing: border-box;
  overflow: hidden;
  &:last-child {
    width: 228px;
  }

  .header {
    height: 120px;
    display: flex;
    padding: 20px 0 0 19px;
    box-sizing: border-box;

    .left {
      position: relative;
      height: 80px;
      width: 80px;

      img {
        height: 80px;
        width: 80px;
      }

      .msk {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-position: -145px -57px;
      }
    }

    .right {
      margin: 6px 0 0 10px;

      .operator {
        margin-top: 16px;

        .btn {
          width: 22px;
          height: 22px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -205px;

          &:hover {
            background-position: -267px -235px;
          }
        }

        .favor {
          margin-left: 10px;
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .list {
    .item {
      padding-left: 15px;
      height: 32px;
      width: 100%;
      display: flex;
      align-items: center;

      &:nth-child(-n + 3) {
        color: #c10d0c;
      }

      .index {
        width: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .name {
        ${(props) => props.theme.mixin.textNoWrap}
        width: 178px;
        color: #000;
      }
    }
  }
  .footer {
    cursor: pointer;
    padding-right: 32px;
    color: #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 32px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
