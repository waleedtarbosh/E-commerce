import React from 'react';
import styles from './Countdown.module.css';
const Countdown = ({ days, hours, minutes, seconds }) => {
  const countdownUnits = [
    { label: 'Days', value: days, counterClass: styles.DaysCounter, labelClass: styles.days, valueClass: styles.heading },
    { label: 'Hours', value: hours, counterClass: styles.HoursCounter, labelClass: styles.hours, valueClass: styles.heading },
    { label: 'Minutes', value: minutes, counterClass: styles.MinutesCounter, labelClass: styles.minutes, valueClass: styles.heading },
    { label: 'Seconds', value: seconds, counterClass: styles.SecondsCounter, labelClass: styles.seconds, valueClass: styles.heading }
  ];
  const semiCircleClasses = [
    { cloneClass: styles.semiClone1, ellipse1: styles.ellipse18, ellipse2: styles.ellipse19 },
    { cloneClass: styles.semiClone2, ellipse1: styles.ellipse19, ellipse2: styles.ellipse20 },
    { cloneClass: styles.semiClone3, ellipse1: styles.ellipse21, ellipse2: styles.ellipse22 }
  ];
  return (
    <div className={styles.group}>
      {semiCircleClasses.map((circle, index) => (
        <div className={`${circle.cloneClass}`} key={index}>
          <div className={`${circle.ellipse1}`}></div>
          <div className={`${circle.ellipse2}`}></div>
        </div>
      ))}  
      {countdownUnits.map((unit, index) => (
        <div className={`${styles.counter} ${unit.counterClass}`} key={index}>
          <div className={`${styles.label} ${unit.labelClass}`}>{unit.label}</div>
          <div className={` ${unit.valueClass}`}>{unit.value.toString().padStart(2, '0')}</div>
        </div>
      ))}
    </div>
  );
}
export default Countdown;
