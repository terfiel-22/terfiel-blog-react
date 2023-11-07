import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PageWrapper = styled.div`
  .post-slider {
    border: 1px solid red;
    position: relative;

    .slider-title {
      text-align: center;
      margin: 30px auto;
    }
  }
`;

export const PostWrapper = styled(Carousel)`
  border: 1px dashed red;
  width: 84%;
  height: 350px;
  margin: 0px auto;
`;

// eslint-disable-next-line react-refresh/only-export-components
const CustomArrowButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  font-size: 2em;
  color: #006669;
  cursor: pointer;
`;

export const LeftArrow = styled(CustomArrowButton)`
  left: 30px;
`;

export const RightArrow = styled(CustomArrowButton)`
  right: 30px;
`;

// Move to another component
export const PostContainer = styled.div`
  background: #05f7ff;
  height: 350px;
  margin: 0px 10px;
`;
