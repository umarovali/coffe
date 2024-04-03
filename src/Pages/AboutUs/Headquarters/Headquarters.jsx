import React from "react";
import HeadquartersPropis from "./HeadquartersPropis";
import headquartersImg from "../../../assets/images/headquarters/headquarters.svg";
import headquartersImgTwo from "../../../assets/images/headquarters/headquartersTwo.svg";
import headquartersImgSry from "../../../assets/images/headquarters/headquartersSry.svg";

export const Headquarters = () => {
  return (
    <section className="headquarters">
      <div className="container">
        <center>
          <h2>Our headquarters</h2>
        </center>

        <div className="blockCard">
          <HeadquartersPropis
            img={headquartersImg}
            title="United Kingdom"
            suptitle="68  Asfordby Rd 
          Alcaston
          SY6 1YA
          +44 1241 918425"
          />
          <HeadquartersPropis
            img={headquartersImgTwo}
            title=" Canada (disambiguation)."
            suptitle="68  Asfordby Rd 
          Alcaston
          SY6 1YA
          +44 1241 918425"
          />
          <HeadquartersPropis
            img={headquartersImgSry}
            title="Australia Australia"
            suptitle="36 Swanston Street
            Kewell
            Victoria
            +61 4 9928 3629"
          />
        </div>
      </div>
    </section>
  );
};
