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
`;
