import React from "react";
import quality from "../../../assets/images/quality/quality.png";

export const Quality = () => {
  return (
    <section className="quality">
      <div className="container">
        <div className="quality__l__r">
          <div className="quality__l">
            <h2>Uncompromising quality</h2>
            <p>
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
          <div className="quality__r">
            <img
              style={{
                position: "relative",
                bottom: "100px",
                width: "550px",
                height: "500px",
              }}
              src={quality}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
