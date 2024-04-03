import React from "react";

export default function HeadquartersPropis({ img, title, suptitle }) {
  return (
    <li className="headquartersCard">
      <img className="headquartersImg" src={img} alt="" />
      <div>
        <h5 className="headquartersTitle">{title}</h5>
        <p className="headquartersSupTitle">{suptitle}</p>
      </div>
    </li>
  );
}
