import React from "react";
import { Link } from "react-router-dom";

export default function Links({ text, link }) {
  return (
    <li className="header_links">
      <Link to={link}>{text}</Link>
    </li>
  );
}
