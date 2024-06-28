import assets from "../../assets/assets/assets";
import styles from "./Main.module.css";
export default function Greeting() {
  return (
    <div className={styles.greeting}>
      <p>
        <span className={styles["colored"]}>Hello Dev. </span> <br />
        How Can I Help You today?
      </p>
    </div>
  );
}
