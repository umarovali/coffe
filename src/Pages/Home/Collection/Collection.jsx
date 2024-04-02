import React from "react";
import Our from "../../../assets/images/collection/our.png";
import { CollectionPropis } from "./CollectionPropis";
import { CollectionPropisTwo } from "./CollectionPropisTwo";

export const Collection = () => {
  return (
    <>
      <section className="collection">
        <div className="container">
          <center>
            <h2 className="collectionTitle">our collection</h2>
          </center>

          <CollectionPropis
            img={Our}
            title="Danche"
            supTitle="  Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes."
          />

          <CollectionPropisTwo
            img={Our}
            title="Gran Espresso"
            supTitle="  Light and flavorful blend with cocoa and black pepper for an intense experience."
          />

          <CollectionPropis
            img={Our}
            title="Piccollo"
            supTitle=" Mild and smooth blend featuring notes of toasted almond and dried cherry."
          />

          <CollectionPropisTwo
            img={Our}
            title="Planalto"
            supTitle=" Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."
          />
        </div>
      </section>
    </>
  );
};
