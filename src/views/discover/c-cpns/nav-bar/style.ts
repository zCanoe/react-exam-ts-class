import styled from "styled-components";
export const NavWrapper = styled.nav`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};
  .nav {
    display: flex;
    box-sizing: border-box;
    padding-left: 150px;
    position: relative;
    top: -4px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        box-sizing: border-box;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`;
