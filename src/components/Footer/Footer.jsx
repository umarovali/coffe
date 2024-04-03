import React from "react";
import FootLink from "./FootLink/FootLink";
import footerLogo from "../../assets/images/Logo.png";
import icon from "../../assets/images/faceboockIcon.svg";
import icon2 from "../../assets/images/twiter.svg";
import icon3 from "../../assets/images/instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <img className="footerLogo" src={footerLogo} alt="" />
          <nav>
            <ul className="footer_nav">
              <li>
                <FootLink />
              </li>
            </ul>
          </nav>

          <div className="icon">
            <img src={icon} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
