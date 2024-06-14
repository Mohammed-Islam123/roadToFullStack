import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
export const ImageSlider = ({ images }) => {
  useEffect(() => {
    setImageIndex(
      localStorage.getItem("current-image")
        ? Number(localStorage.getItem("current-image"))
        : 0
    );
  }, []);
  function handleNext() {
    setImageIndex((prev) => {
      const n = prev < images.length - 1 ? prev + 1 : 0;
      localStorage.setItem("current-image", n);
      return n;
    });
  }
  function handlePrevious() {
    setImageIndex((prev) => {
      const n = prev > 0 ? prev - 1 : images.length - 1;
      localStorage.setItem("current-image", n);
      return n;
    });
  }

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="image-slider-container">
      <div className="images">
        {images.map((image, index) => (
          <img
            src={image}
            key={image}
            alt="a car"
            className="current-image"
            style={{ translate: `${-100 * imageIndex}%` }}
            aria-hidden={index !== imageIndex}
          ></img>
        ))}
      </div>

      <button
        onClick={handlePrevious}
        className="image-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={handleNext}
        className="image-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight />
      </button>
      <div className="circle-btn">
        {images.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                localStorage.setItem("current-image", index);
                setImageIndex(index);
              }}
              aria-label={`View image ${index + 1}`}
            >
              {index === imageIndex ? <CircleDot aria-hidden /> : <Circle />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
