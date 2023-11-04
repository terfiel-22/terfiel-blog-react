import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: #008489;
  height: 66px;

  * {
    color: white;
  }

  .logo {
    float: left;
    height: inherit;
    margin: 0 0 0 2em;

    .logo-text {
      font-family: "Candal", serif;
      margin: 9px;

      span {
        color: #05f7ff;
      }
    }
  }

  .menu-toggle {
    display: none;
  }
`;
