import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContainer } from "./carousel-post-item.styles";
export const CarouselPostItem = () => {
  return (
    <PostContainer>
      <img
        src="https://picsum.photos/200/300"
        alt="A photo from picsum"
        className="slider-image"
      />
      <div className="post-info">
        <h4>
          <a href="https://picsum.photos/">Easy to use, stylish placeholders</a>
        </h4>
        <FontAwesomeIcon icon={faUser} /> Terfiel &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faCalendar} /> Mar. 8, 2019
      </div>
    </PostContainer>
  );
};
