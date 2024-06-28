import React, { useContext, useEffect } from "react";
import assets from "../../assets/assets/assets";
import styles from "./Main.module.css";
import { Context } from "../../context/Context";

export default function Prompt() {
  const { input, setInput, getResponce, setPreviousPrompts, darkMode } =
    useContext(Context);

  function handleSubmit(eve: React.FormEvent<HTMLFormElement>) {
    eve.preventDefault();
    getResponce(input);

    setPreviousPrompts((prev) => [...prev, input]);
    setInput("");
  }

  return (
    <>
      <div className={`${styles["bottom"]} ${darkMode ? styles.dark : ""}`}>
        <form className={styles.prompt} onSubmit={handleSubmit}>
          <input
            type="text"
            name="prompt"
            placeholder="Enter a prompt here"
            className={styles.text}
            onChange={(eve) => {
              setInput(eve.target.value);
            }}
            value={input}
          />
          <div>
            <img
              src={assets.gallery_icon}
              alt="import image"
              className={styles.gallery}
            />

            <img
              src={assets.mic_icon}
              alt="import image"
              className={styles.mic_icon}
            />
            <button type="submit" className={styles["send-btn"]}>
              <img
                src={assets.send_icon}
                alt="import image"
                className={styles["send-icon"]}
              />
            </button>
          </div>
        </form>

        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </>
  );
}
