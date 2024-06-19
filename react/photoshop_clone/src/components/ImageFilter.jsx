import React, { useState } from "react";
import { Gallery } from "./Gallery";
import SideBar from "./SideBar";
import Slider from "./Slider";
export default function ImageFilter({ imageURL }) {
  const [currentOption, setCurrentOption] = useState(0);
  const [currentValue, setCurrentValue] = useState(100);
  const [filter, setFilter] = useState({
    brightness: { min: 0, max: 200, value: 100 },
    contrast: { min: 0, max: 200, value: 100 },
    saturate: { min: 0, max: 200, value: 100 },
    grayscale: { min: 0, max: 100, value: 0 },
    sepia: { min: 0, max: 100, value: 0 },
    hueRotate: { min: 0, max: 360, value: 0 },
    blur: { min: 0, max: 20, value: 0 },
  });
  const options = [
    "Brightness",
    "Contrast",
    "Saturation",
    "Grayscale",
    "Sepia",
    "Hue Rotation",
    "Blur",
  ];

  return (
    <div className="container">
      <Gallery filter={filter} imageURL={imageURL} />
      <SideBar
        options={options}
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        filter={filter}
        setCurrentValue={setCurrentValue}
      />
      <Slider
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
        filter={filter}
        setFilter={setFilter}
        selectedOption={currentOption}
      />
    </div>
  );
}
