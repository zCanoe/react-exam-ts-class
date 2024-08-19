import styled from "styled-components";

export const SingerWrapper = styled.div`
  margin-top: 15px;
  padding: 0 20px;

  .content {
    margin-top: 6px;

    .item {
      background-color: #fafafa;
      display: flex;
      margin-top: 14px;
      border: 1px #e9e9e9 solid;
      cursor: pointer;

      &:hover {
        background-color: #f4f4f4;
      }
    }

    .avatar {
      img {
        width: 62px;
        height: 62px;
        object-fit: cover;
      }
    }

    .info {
      margin-left: 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-weight: bold;
        font-size: 14px;
      }
      .alias {
        margin-top: 8px;
        cursor: pointer;
        color: #666;
      }
    }
  }

  .apply-for {
    margin-top: 14px;
    width: 210px;
    height: 31px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 31px;
    border-radius: 4px;
    background-color: #fafafa;
    border: 1px #c3c3c3 solid;

    a {
      font-weight: bold;
      text-decoration: none;
    }
  }
`;
