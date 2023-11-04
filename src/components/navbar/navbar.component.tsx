import { Link } from "react-router-dom";
import { DropdownLinks, NavLinks } from "./navbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <NavLinks>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Services</Link>
      </li>
      {/* 
      <li>
        <Link to="/">Sign Up</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li> 
      */}
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faUser} />
          Terfiel
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
        <DropdownLinks>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/" className="logout">
              Logout
            </Link>
          </li>
        </DropdownLinks>
      </li>
    </NavLinks>
  );
}
