import assets from "../../assets/assets/assets";
import styles from "./Main.module.css";
import lightIcon from "../../assets/light.png";
import darkIcon from "../../assets/crescent-moon.png";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Header() {
  const { darkMode, setDarkMode } = useContext(Context);
  return (
    <header>
      <p>Gemini</p>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className={styles["toggle-dark-mode"]}
      >
        <img
          src={darkMode ? darkIcon : lightIcon}
          alt="toggle dark and light mode"
        />
      </button>
      <img src={assets.user_icon} alt="" className={styles.user} />
    </header>
  );
}
