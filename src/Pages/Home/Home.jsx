import React from "react";
import { Simpley } from "./Simpley/Simpley";
import Footer from "./Footer/Footer";
import { Collection } from "./Collection/Collection";
import Choose from "./Choose/Choose";

export default function Home() {
  return (
    <>
      <Simpley />
      <Collection />
      <Choose />
      <Footer />
    </>
  );
}