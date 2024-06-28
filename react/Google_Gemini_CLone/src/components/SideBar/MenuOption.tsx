import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import { Context } from "../../context/Context";
type OptionProps = {
  imgSrc: string;
  onClick: (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  title: string;
  isSideBarOpen: boolean;
};
export default function MenuOption({
  imgSrc,
  onClick,
  title,
  isSideBarOpen,
}: OptionProps) {
  const { darkMode } = useContext(Context);
  return (
    <div
      className={`${styles.option} ${darkMode ? styles.dark : ""}`}
      onClick={onClick}
    >
      <img src={imgSrc} alt="" />
      {isSideBarOpen && <span>{title} </span>}
    </div>
  );
}
