type CardProps = {
  iconSrc: string;
  description: string;
};
import { useContext } from "react";
import styles from "./Main.module.css";
import { Context } from "../../context/Context";

export default function Card({ description, iconSrc }: CardProps) {
  const { getResponce, setPreviousPrompts } = useContext(Context);
  return (
    <div
      className={styles.card}
      onClick={() => {
        setPreviousPrompts((prev) => [...prev, description]);

        getResponce(description);
      }}
    >
      <p>{description}</p>
      <img src={iconSrc} alt="card-icon" />
    </div>
  );
}
