import { ImageSlider } from "./components/ImageSlider";
import c1 from "./assets/cars/car-1.jpg";
import c2 from "./assets/cars/car-2.jpg";
import c3 from "./assets/cars/car-3.jpg";
import c4 from "./assets/cars/car-4.jpg";
import c5 from "./assets/cars/car-5.jpg";
import c6 from "./assets/cars/c1.jpg";
import c7 from "./assets/cars/c2.jpg";
import c8 from "./assets/cars/c3.jpg";
import c9 from "./assets/cars/c4.jpg";
import c10 from "./assets/cars/c5.jpg";
export default function App() {
  const images = [c2, c1, c3, c4, c5, c6, c7, c8, c9, c10];
  return (
    <div
      style={{
        maxWidth: "1500px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={images} />
    </div>
  );
}
