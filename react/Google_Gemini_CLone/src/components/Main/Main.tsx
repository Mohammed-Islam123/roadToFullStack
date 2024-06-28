import React, { useContext } from "react";
import styles from "./Main.module.css";
import Header from "./Header";
import Greeting from "./Greeting";
import Cards from "./Cards";
import Prompt from "./Prompt";
import { Context } from "../../context/Context";
import Responce from "./Responce";

export default function Main() {
  const { isNewChat, darkMode } = useContext(Context);
  return (
    <div
      className={`${styles["main-container"]} ${darkMode ? styles.dark : ""}`}
    >
      <Header />
      <div className={styles["main-menu"]}>
        {isNewChat ? (
          <>
            <Greeting />
            <Cards />
          </>
        ) : (
          <Responce />
        )}
        <Prompt />
      </div>
    </div>
  );
}
