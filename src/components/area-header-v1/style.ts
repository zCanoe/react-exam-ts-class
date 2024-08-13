import styled from "styled-components";

export const AreaHeaderV1Wrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  box-sizing: border-box;
  padding: 0 18px 4px 34px;
  margin-bottom: 5px;
  background-position: -225px -156px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .left {
    height: inherit;
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
      font-weight: normal;
    }

    .keywords {
      display: flex;
      align-content: center;

      .item {
        position: relative;
        top: 2px;
        .link:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .divide {
          margin: 0 13px;
          color: #ccc;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  > .right {
    position: relative;
    top: 4px;
    left: 8px;
    display: flex;
    align-items: center;

    .more:hover {
      text-decoration: underline;
      color: #333;
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
