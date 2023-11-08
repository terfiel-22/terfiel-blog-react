import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselPostItemContainer } from "./carousel-post-item.styles";
export const CarouselPostItem = () => {
  return (
    <CarouselPostItemContainer>
      <img src="https://picsum.photos/200/300" alt="A photo from picsum" />
      <div className="post-info">
        <h4>
          <a href="#">Easy to use, stylish placeholders</a>
        </h4>
        <FontAwesomeIcon icon={faUser} /> Terfiel &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faCalendar} /> Mar. 8, 2019
      </div>
    </CarouselPostItemContainer>
  );
};
