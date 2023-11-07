import Navbar from "../../components/navbar/navbar.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer } from "./header.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsNavbarOpen } from "../../store/navbar/navbar.action";
import { selectIsNavbarOpen } from "../../store/navbar/navbar.selector";

export default function Header() {
  const dispatch = useDispatch();
  const isNavbarOpen = useSelector(selectIsNavbarOpen);
  const menuToggleHandler = () => dispatch(setIsNavbarOpen(!isNavbarOpen));
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <h1 className="logo-text">
            <span>TERFIEL</span>BLOG
          </h1>
        </div>

        <FontAwesomeIcon
          icon={faBars}
          className="menu-toggle"
          onClick={menuToggleHandler}
        />
        <Navbar />
      </HeaderContainer>
    </>
  );
}
