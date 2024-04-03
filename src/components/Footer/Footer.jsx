import React from "react";
import Logo from "../../components/Footer/FootLink/FootLink";
import FootLink from "./FootLink/FootLink";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <img src={Logo} alt="" />
        </div>

        <nav>
          <ul className="footer_nav">
            <li>
              <FootLink />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
