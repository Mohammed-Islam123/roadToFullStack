import React from "react";
import "./ImageUpload.css";
const ImageUpload = ({ setImageURL, setIsImageUploaded }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Set the image URL in the parent component
        setImageURL(e.target.result);
        // Optionally, notify the parent component that an image is uploaded
        setIsImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload">
        <h1>Welcome Back, please select your image</h1>

        <input type="file" onChange={handleImageChange} accept="image/*" />
      </div>
    </div>
  );
};

export default ImageUpload;
