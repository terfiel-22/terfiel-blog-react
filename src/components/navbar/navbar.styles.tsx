import styled from "styled-components";

export const NavLinks = styled.ul`
  float: right;
  margin: 0px;
  padding: 0px;
  list-style: none;

  li {
    float: left;
    position: relative;

    a {
      display: block;
      padding: 21px;
      font-size: 1.1em;
      text-decoration: none;

      &:hover {
        background: #006669;
        transition: 0.5s;
      }

      &.logout {
        color: red;
      }
    }

    &:last-child a svg {
      padding: 0 0.2em 0;

      &:last-child {
        font-size: 0.8em;
        padding: 0 0 0 1em;
      }
    }

    &:hover {
      ul {
        display: block;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    background: #0e94a0;
    max-height: 0px;
    overflow: hidden;

    li {
      width: 100%;
    }
  }
`;

export const DropdownLinks = styled(NavLinks)`
  position: absolute;
  top: 66px;
  right: 0px;
  width: 180px;
  display: none;

  li {
    width: 100%;

    a {
      padding: 10px;
      background: white;
      color: #444;

      &:hover {
        background: #d5d6d6;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    display: block;
    position: static;

    li {
      width: 100%;

      a {
        padding: 10px 0 0 50px;
        background: #0e94a0;
        color: white;

        &:hover {
          background: #d5d6d6;
        }
      }
    }
  }
`;
