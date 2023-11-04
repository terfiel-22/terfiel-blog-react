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

  @media only screen and (max-width: 750px) {
    position: relative;

    .menu-toggle {
      display: block;
      position: absolute;
      right: 20px;
      top: 20px;
      font-size: 1.9em;
    }

    .logo {
      margin-left: 0.8em;
    }
  }
`;
