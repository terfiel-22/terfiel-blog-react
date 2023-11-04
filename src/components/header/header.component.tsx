import Navbar from "../../components/navbar/navbar.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer } from "./header.styles";

export default function Header() {
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
        ></FontAwesomeIcon>
        <Navbar />
      </HeaderContainer>
    </>
  );
}
