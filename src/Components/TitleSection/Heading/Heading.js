import React from "react";
import styles from "./Heading.module.css";
const Heading = ({ Heading }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{Heading}</p>
    </div>
  );
};
export default Heading;
