import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  LeftArrow,
  PageWrapper,
  PostContainer,
  PostWrapper,
  RightArrow,
} from "./carousel.styles";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { ButtonGroupProps } from "react-multi-carousel";

export const Carousel = () => {
  const responsive = {
    largeDevice: {
      breakpoint: { max: 3000, min: 751 },
      items: 3,
    },
    smallDevice: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };
  return (
    <PageWrapper>
      <div className="post-slider">
        <h1 className="slider-title">Trending Posts</h1>
        <PostWrapper
          responsive={responsive}
          infinite={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          <PostContainer>1</PostContainer>
          <PostContainer>2</PostContainer>
          <PostContainer>3</PostContainer>
          <PostContainer>4</PostContainer>
          <PostContainer>5</PostContainer>
          <PostContainer>6</PostContainer>
          <PostContainer>7</PostContainer>
          <PostContainer>8</PostContainer>
        </PostWrapper>
      </div>
    </PageWrapper>
  );
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  next,
  previous,
  carouselState,
}) => {
  return (
    <>
      <LeftArrow
        icon={faChevronLeft}
        className={carouselState?.currentSlide === 0 ? "disable" : ""}
        onClick={() => previous?.()}
      />
      <RightArrow icon={faChevronRight} onClick={() => next?.()} />
    </>
  );
};
