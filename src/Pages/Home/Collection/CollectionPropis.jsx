import React from "react";

export const CollectionPropis = (item) => {
  return (
    <div className="colPropis__l__r">
      <div className="colPropis__l">
        <img src={item.img} alt="" />
      </div>
      <div className="colPropis__r">
        <h3 className="colPropisTitle">{item.title}</h3>
        <h3 className="colPropisSupTitle">{item.supTitle}</h3>
      </div>
    </div>
  );
};
