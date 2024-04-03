import React from "react";

export const Herro = ({ title, suptitle, img }) => {
  return (
    <section className="herro">
      <ul className="herro__l__r">
        <li className="herro__l__width">
          <div className="herro__l">
            <h1 className="herroTitle">{title}</h1>
            <p className="herroSupTitle">
              {suptitle}
            </p>
          </div>
        </li>
        <li className="herro__r">
          <img src={img} alt="" />
        </li>
      </ul>
    </section>
  );
};
