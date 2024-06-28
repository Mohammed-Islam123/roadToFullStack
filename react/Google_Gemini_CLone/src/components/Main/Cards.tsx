import React from "react";
import assets from "../../assets/assets/assets";
import styles from "./Main.module.css";
import Card from "./Card";
export default function Cards() {
  return (
    <div className={styles.cards}>
      <Card
        iconSrc={assets.compass_icon}
        description="Suggest beautiful places to see on an upcoming road trip"
      />
      <Card
        iconSrc={assets.bulb_icon}
        description="Briefly summarize this concept: urban planning"
      />
      <Card
        iconSrc={assets.message_icon}
        description="Brainstorm team bonding activities for our work retreat"
      />
      <Card
        iconSrc={assets.code_icon}
        description="Tell me about React js and React native"
      />
    </div>
  );
}
