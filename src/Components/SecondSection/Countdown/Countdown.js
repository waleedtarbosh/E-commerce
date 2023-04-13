import React from 'react';
import styles from './Countdown.module.css';

const Countdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.group}>
      <div className={`${styles.semiClone} ${styles.semiClone2}`}>
        <div className={`${styles.ellipse} ${styles.ellipse19}`}></div>
        <div className={`${styles.ellipse} ${styles.ellipse20}`}></div>
      </div>
      <div className={`${styles.semiClone} ${styles.semiClone1}`}>
        <div className={`${styles.ellipse} ${styles.ellipse18}`}></div>
        <div className={`${styles.ellipse} ${styles.ellipse19}`}></div>
      </div>
      <div className={`${styles.semiClone} ${styles.semiClone3}`}>
        <div className={`${styles.ellipse} ${styles.ellipse21}`}></div>
        <div className={`${styles.ellipse} ${styles.ellipse22}`}></div>
      </div>
      <div className={styles.DaysCounter}>
        <div className={styles.days}>Days</div>
        <div className={styles.heading}>{days.toString().padStart(2, '0')}</div>
      </div>
      <div className={styles.HoursCounter}>
        <div className={styles.hours}>Hours</div>
        <div className={styles.heading}>{hours.toString().padStart(2, '0')}</div>
      </div>
      <div className={styles.MinutesCounter}>
        <div className={styles.minutes}>Minutes</div>
        <div className={styles.heading}>{minutes.toString().padStart(2, '0')}</div>
      </div>
      <div className={styles.SecondsCounter}>
        <div className={styles.seconds}>Seconds</div>
        <div className={styles.heading}>{seconds.toString().padStart(2, '0')}</div>
      </div>
    </div>
  );
}

export default Countdown;
