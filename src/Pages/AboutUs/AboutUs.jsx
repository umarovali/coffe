import React from "react";
import { Herro } from "../../components/Herro/Herro";
import { Commit } from "./Commmit/Commit";
import { Quality } from "./Quality/Quality";
import { Headquarters } from "./Headquarters/Headquarters";
import HerroImg1 from "../../assets/images/herro/herro.png";

export default function AboutUs() {
  return (
    <>
      <Herro title="About Us" suptitle="Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have since
              been dedicated to bring the perfect cup - from bean to brew - in
              every shipment." img={HerroImg1} />
      <Commit />
      <Quality />
      <Headquarters />
    </>
  );
}
