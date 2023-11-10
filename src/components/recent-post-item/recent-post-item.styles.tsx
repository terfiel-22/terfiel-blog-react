import styled from "styled-components";

export const RecentPostItemContainer = styled.div`
  width: 95%;
  height: 270px;
  margin: 20px 0px;
  border-radius: 5px;
  background: white;
  position: relative;

  img {
    width: 40%;
    height: 100%;
    float: left;
    border-radius: 5px 0 0 5px;
  }

  .post-preview {
    padding: 10px;
    width: 60%;
    float: right;
  }

  .btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    border: 1px solid #005255;
    background: transparent;
    border-radius: 0px;
    color: #005255;
    transition: 0.25s;

    &:hover {
      background: #006669;
      color: white;
    }
  }
`;
