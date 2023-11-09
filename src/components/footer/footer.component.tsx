import { FormEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterContainer, FooterSection } from "./footer.styles";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const onSubmitMessageHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <FooterContainer>
      <div className="footer-content">
        <FooterSection className="about">
          <h1 className="logo-text">
            <span>TERFIEL</span>BLOG
          </h1>
          <p>
            Explore a world of knowledge and inspiration with our blog. Discover
            a diverse range of articles on topics that matter most to you. Stay
            informed, entertained, and inspired with every click.
          </p>
          <div className="contact">
            <span>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; 123-456-789
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; info@mywebsite.com
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </FooterSection>
        <FooterSection className="links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Mentors</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Term and Conditions</a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection className="contact-form">
          <h2>Contact us</h2>
          <br />
          <form onSubmit={onSubmitMessageHandler}>
            <input
              type="email"
              name="name"
              className="text-input contact-input"
              placeholder="Your email address.."
            />
            <textarea
              name="message"
              className="text-input contact-input"
              rows={4}
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="btn btn-big">
              <FontAwesomeIcon icon={faPaperPlane} />
              &nbsp;Send
            </button>
          </form>
        </FooterSection>
      </div>
      <div className="footer-bottom">
        &copy; Terfielblogs | Designed by Terciel
      </div>
    </FooterContainer>
  );
};

export default Footer;
