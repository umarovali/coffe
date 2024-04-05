import React from "react";
import FootLink from "./FootLink/FootLink";
import footerLogo from "../../assets/images/footerLogo.svg";
import icon from "../../assets/images/faceboockIcon.svg";
import icon2 from "../../assets/images/twiter.svg";
import icon3 from "../../assets/images/instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <Link to="/">
            <img className="footerLogo" src={footerLogo} alt="" />
          </Link>
          <nav>
            <ul className="footer_nav">
              <li>
                <FootLink />
              </li>
            </ul>
          </nav>

          <div className="icon">
            <Link to="https://www.facebook.com/">
              <img src={icon} alt="" />
            </Link>
            <Link to="https://ru-ru.facebook.com/TwitterInc/">
              <img src={icon2} alt="" />
            </Link>
            <Link to="https://www.instagram.com/">
              <img src={icon3} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
