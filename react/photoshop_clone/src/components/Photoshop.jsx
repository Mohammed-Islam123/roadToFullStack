import React, { useState } from "react";

import "./Photoshop.css";
import ImageUpload from "./ImageUpload";
import ImageFilter from "./ImageFilter";
export const Photoshop = () => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState("");
  return (
    <>
      {!isImageUploaded && (
        <ImageUpload
          setImageURL={setImageURL}
          setIsImageUploaded={setIsImageUploaded}
        />
      )}
      {isImageUploaded && <ImageFilter imageURL={imageURL} />}
    </>
  );
};
