import React from "react";
import { Simpley } from "./Simpley/Simpley";
import { Collection } from "./Collection/Collection";
import Choose from "./Choose/Choose";
import Works from "./Works/Works";

export default function Home() {
  return (
    <>
      <Simpley />
      <Collection />
      <Choose />
      <Works />
    </>
  );
}
