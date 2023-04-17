import React from "react";
import Countdown from "./Countdown/Countdown";
import ArrowButtons from "./ArrowButtons/ArrowButtons";
import styles from "./TitleSection.module.css";
import Title from "./Title/Title";
import Heading from "./Heading/Heading";
const TitleSection = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <Title Title="Today's" />
        <Heading Heading="Flash Sales" />
      </div>
      <div className={styles.container}>
        <div className={`${styles.flexContainer} ${styles.Countdown}`}>
          <Countdown days={3} hours={23} minutes={19} seconds={56} />
          <ArrowButtons className={styles.ArrowButtons} />
        </div>
      </div>
    </div>
  );
};
export default TitleSection;
