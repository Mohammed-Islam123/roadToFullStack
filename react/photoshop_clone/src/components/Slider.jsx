import React from "react";

export default function Slider({
  selectedOption,
  filter,
  setFilter,
  currentValue,
  setCurrentValue,
}) {
  let temp = {};
  let currentProperty = Object.keys(filter)[selectedOption];
  const handleChange = (eve) => {
    setCurrentValue(eve.target.value);
    temp = { ...filter };
    temp[currentProperty].value = Number(eve.target.value);
    setFilter(temp);
  };
  return (
    <div className="slider-container">
      <input
        type="range"
        name="currentValue"
        className="slider"
        value={currentValue}
        onChange={handleChange}
        max={filter[currentProperty].max}
        min={filter[currentProperty].min}
      />
    </div>
  );
}
