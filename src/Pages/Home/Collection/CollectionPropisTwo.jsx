import React from "react";

export const CollectionPropisTwo = (item) => {
  return (
    <div className="colPropisTwo__l__r">
      <div className="colPropisTwo__r">
        <h3 className="colPropisTitleTwo">{item.title}</h3>
        <h3 className="colPropisSupTitleTwo">{item.supTitle}</h3>
      </div>
      <div className="colPropisTwo__l">
        <img src={item.img} alt="" />
      </div>
    </div>
  );
};
