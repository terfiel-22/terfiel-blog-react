import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #303036;
  color: #d3d3d3;
  height: 400px;
  position: relative;

  .footer-content {
    height: 350px;
    display: flex;

    h1,
    h2 {
      color: white;
    }
  }

  .footer-bottom {
    background: #343a40;
    color: #686868;
    height: 50px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding-top: 20px;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  padding: 25px;

  &.about {
    h1 span {
      color: #05f7ff;
    }

    .contact span {
      display: block;
      font-size: 1.1em;
      margin-bottom: 8px;
    }

    .socials a {
      border: 1px solid gray;
      width: 45px;
      height: 41px;
      padding-top: 5px;
      margin-right: 5px;
      text-align: center;
      display: inline-block;
      font-size: 1.3em;
      border-radius: 5px;
      transition: all 0.3s;

      &:hover {
        border: 1px solid white;
        color: white;
      }
    }
  }

  &.links {
    ul li a {
      display: block;
      margin-bottom: 10px;
      font-size: 1.2em;
      transition: all 0.3s;

      &:hover {
        color: white;
        margin-left: 15px;
      }
    }
  }

  &.contact-form {
    .contact-input {
      background: #272727;
      color: #beddbd;
      margin-bottom: 10px;
      line-height: 1.5rem;
      padding: 0.9rem 1.4rem;
      border: none;

      &:focus {
        background: #1a1a1a;
      }
    }

    textarea {
      resize: none;
    }

    .btn-big {
      float: right;
      cursor: pointer;
    }
  }
`;
