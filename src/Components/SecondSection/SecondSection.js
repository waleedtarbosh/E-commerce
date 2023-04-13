import React from 'react';
import TitleAndHeading from './TitleAndHeading/TitleAndHeading';
import Countdown from './Countdown/Countdown';
import ArrowButtons from './ArrowButtons/ArrowButtons';
import styles from './SecondSection.module.css';
const SecondSection = () => {
  return (
   
    <div className={styles.container}>
      <TitleAndHeading Title="Today's" Heading="Flash Sales" />
      <Countdown days={3} hours={23} minutes={19} seconds={56} />
      <ArrowButtons />
    </div>
  );
};

export default SecondSection;
