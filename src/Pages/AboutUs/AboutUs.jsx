import React from "react";
import { Herro } from "./Herro/Herro";
import { Commit } from "./Commmit/Commit";
import { Quality } from "./Quality/Quality";
import { Headquarters } from "./Headquarters/Headquarters";

export default function AboutUs() {
  return (
    <div>
      <Herro />
      <Commit />
      <Quality />
      <Headquarters />
    </div>
  );
}
