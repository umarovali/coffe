import React from "react";
import simpleyImg from "../../../assets/images/sympley/simpleyImg.png";

export const Simpley = () => {
  return (
    <>
      <div className="simpley">
        <div className="simpley_left_width">
          <div className="simpley_l">
            <div className="simpley_l_title">Good coffee is made simply.</div>
            <div className="simpley_l_suptitle">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </div>
            <div className="simpley_l_btn">Create your plan</div>
          </div>
        </div>

        <div className="simpley_r">
          <img src={simpleyImg} alt="" />
        </div>
      </div>
    </>
  );
};
