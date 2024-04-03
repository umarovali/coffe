import React from "react";
import herroImg from "../../../assets/images/herro/herro.png";

export const Herro = () => {
  return (
    <section className="herro">
      <div className="herro__l__r">
        <div className="herro__l__width">
        <div className="herro__l">
          <div className="herroTitle">About Us</div>
          <div className="herroSupTitle">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </div>
        </div>
        </div>
        <div className="herro__r">
          <img src={herroImg} alt="" />
        </div>
      </div>
    </section>
  );
};
