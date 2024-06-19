import React from "react";
import image from "../assets/image.jpg";
export const Gallery = ({ filter, imageURL }) => {
  const createFilterString = (filterObject) => {
    return Object.entries(filterObject)
      .map(([key, obj]) => {
        switch (key) {
          case "blur":
            return ` ${key}(${obj.value}px) `;
          case "hueRotate":
            return ` hue-rotate(${obj.value}deg) `;
          default:
            return ` ${key}(${obj.value}%) `;
        }
      })
      .join(" ");
  };

  return (
    <div
      className="image-container"
      style={{
        filter: `${createFilterString(filter)}`,
        backgroundImage: `url(${imageURL})`,
      }}
    ></div>
  );
};
