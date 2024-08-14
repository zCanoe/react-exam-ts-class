import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  > .content {
    background-color: #f5f5f5;
    height: 186px;
    border: 1px #d3d3d3 solid;
    margin: 15px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    flex-wrap: nowrap;

    .carousel {
      flex: 1;
      overflow: hidden;
      .albums {
        display: flex;
        justify-content: space-around;
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17px;

      .arrow {
        width: 17px;
        height: 17px;
        cursor: pointer;
      }
    }

    .left {
      .leftArrow {
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }
    }

    .right {
      .rightArrow {
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
  }
`;
