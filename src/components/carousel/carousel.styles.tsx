import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PageWrapper = styled.div`
  a:hover {
    color: #006669;
  }

  .post-slider {
    position: relative;

    .slider-title {
      text-align: center;
      margin: 30px auto;
    }
  }
`;

export const PostWrapper = styled(Carousel)`
  width: 84%;
  height: 350px;
  overflow: hidden;
  margin: 0px auto;
  padding: 10px 0px;
`;

export const CustomArrowButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  font-size: 2em;
  color: #006669;
  cursor: pointer;
`;

export const LeftArrow = styled(CustomArrowButton)`
  left: 30px;

  @media only screen and (max-width: 750px) {
    left: 10px;
  }
`;

export const RightArrow = styled(CustomArrowButton)`
  right: 30px;

  @media only screen and (max-width: 750px) {
    right: 10px;
  }
`;
