import React from "react";
import Plan from "../../../components/Plan/Plan";
import stiker2 from "../../../assets/images/lasis/stiker2.svg";

export default function Works() {
  return (
    <section className="works">
      <img className="stiker2" src={stiker2} alt="" />
      <h4 className="works_title">How it works</h4>
      <div className="container">
        <Plan />
      </div>

      <center>
        <button className="work_btn">Create your plan</button>
      </center>
    </section>
  );
}
