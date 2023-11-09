import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  LeftArrow,
  PostSlider,
  PostWrapper,
  RightArrow,
} from "./carousel.styles";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { ButtonGroupProps } from "react-multi-carousel";
import { CarouselPostItem } from "../carousel-post-item/carousel-post-item.component";

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
    <PostSlider>
      <h1 className="slider-title">Trending Posts</h1>
      <PostWrapper
        responsive={responsive}
        infinite={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <CarouselPostItem />
        <CarouselPostItem />
        <CarouselPostItem />
        <CarouselPostItem />
        <CarouselPostItem />
        <CarouselPostItem />
      </PostWrapper>
    </PostSlider>
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
