import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { RecentPostItemContainer } from "./recent-post-item.styles";

const RecentPostItem = () => (
  <RecentPostItemContainer>
    <img src="https://picsum.photos/200/300" alt="A photo from picsum" />
    <div className="post-preview">
      <h2>
        <a href="#">Easy to use, stylish placeholders</a>
      </h2>
      <FontAwesomeIcon icon={faUser} /> Terfiel &nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faCalendar} /> Mar. 8, 2019
      <p className="preview-text">
        Elevate Your Design with Effortless Elegance: Exploring Easy-to-Use and
        Stylish Placeholders
      </p>
      <a href="#" className="btn">
        Read More
      </a>
    </div>
  </RecentPostItemContainer>
);

export default RecentPostItem;
