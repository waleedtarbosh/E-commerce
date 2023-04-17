import React from "react";
import styles from "./Title.module.css";
const Title = ({ Title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}></div>
      <div className={styles.Title}>
        <p>{Title}</p>
      </div>
    </div>
  );
};
export default Title;
