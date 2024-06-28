import React, { useContext, useState } from "react";
import styles from "./SideBar.module.css";
import assets from "../../assets/assets/assets";
import MenuOption from "./MenuOption";
import { Context } from "../../context/Context";
import { v4 as uuidV4 } from "uuid";
export default function SideBar() {
  const { previousPrompts, setIsNewChat, getResponce, darkMode } =
    useContext(Context);
  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  const [openSideBar, setOpenSideBar] = useState(true);
  const handleOpenSidebar = () => {
    setOpenSideBar((prev) => !prev);
  };
  function handleHistoryClick(prompt: string) {
    getResponce(prompt);
  }
  return (
    <div
      className={`${styles.sidebar} ${
        styles[`${openSideBar ? "sidebar-open" : "sidebar-close"}`]
      } ${darkMode ? styles.dark : ""} `}
    >
      <div className={styles["menu-and-new-chat"]}>
        <div
          className={`${styles["menu-btn"]} ${darkMode ? styles.dark : ""}`}
          onClick={handleOpenSidebar}
        >
          <img src={assets.menu_icon} alt="" />
        </div>
        <div
          className={`${styles["new-chat"]} ${darkMode ? styles.dark : ""}`}
          onClick={() => {
            setIsNewChat(true);
          }}
        >
          <img src={assets.plus_icon} alt="" className={styles.plus} />
          {openSideBar && <span>New Chat</span>}
        </div>
        {openSideBar && (
          <div className={styles.recent}>
            <p>Recent</p>
            <ul className={styles["recent-items"]}>
              {previousPrompts.map((prompt: string) => (
                <li
                  className={`${styles["recent-item"]} ${
                    darkMode ? styles.dark : ""
                  }`}
                  key={uuidV4()}
                  onClick={() => {
                    handleHistoryClick(prompt);
                  }}
                  title={prompt}
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{prompt} </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={styles.options}>
        <MenuOption
          imgSrc={assets.question_icon}
          onClick={onClick}
          title="Help"
          isSideBarOpen={openSideBar}
        />
        <MenuOption
          imgSrc={assets.history_icon}
          onClick={onClick}
          title="Activity"
          isSideBarOpen={openSideBar}
        />
        <MenuOption
          imgSrc={assets.setting_icon}
          onClick={onClick}
          title="Settings"
          isSideBarOpen={openSideBar}
        />
      </div>
    </div>
  );
}
