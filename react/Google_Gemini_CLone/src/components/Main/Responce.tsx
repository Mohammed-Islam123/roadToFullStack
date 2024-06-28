import styles from "./Main.module.css";
import assets from "../../assets/assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Responce() {
  const { result, loading, recentPrompt, darkMode } = useContext(Context);

  return (
    <div className={`${styles["responce"]} ${darkMode ? styles.dark : ""}`}>
      <div className={styles["user-prompt"]}>
        <img src={assets.user_icon} alt="" />
        <p>{recentPrompt}</p>
      </div>
      <div className={styles.ai}>
        <img src={assets.gemini_icon} alt="" />
        {loading ? (
          <div className={styles.loader}>
            <hr />
            <hr />
            <hr />
          </div>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: result }}></p>
        )}
      </div>
    </div>
  );
}
