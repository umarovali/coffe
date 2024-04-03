import React from "react";
import { Link } from "react-router-dom";

export default function FootLink() {
  return (
    <>
      <nav>
        <ul>
          <li className="link" >
            <Link to="/">HOME</Link>
          </li>
          <li className="link" >
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li className="link" >
            <Link to="/create-plan">Create your plan</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
