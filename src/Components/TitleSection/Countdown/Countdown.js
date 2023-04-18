import React from 'react';
import styles from './Countdown.module.css';
import { countdownUnits, semiCircleClasses } from '../../../data/CountdownData';

const Countdown = ({ days, hours, minutes, seconds }) => {
  // use the props passed to the component to update the values in countdownUnits
  countdownUnits[0].value = days;
  countdownUnits[1].value = hours;
  countdownUnits[2].value = minutes;
  countdownUnits[3].value = seconds;

  return (
    <div className={styles.group}>
      {semiCircleClasses.map((circle) => (
        <div className={`${circle.cloneClass}`} key={circle.id}>
          <div className={`${circle.ellipse1}`}></div>
          <div className={`${circle.ellipse2}`}></div>
        </div>
      ))}
      
      {countdownUnits.map((unit) => (
        <div className={`${styles.counter} ${unit.counterClass}`} key={unit.id}>
          <div className={`${styles.label} ${unit.labelClass}`}>{unit.label}</div>
          <div className={` ${unit.valueClass}`}>{unit.value.toString().padStart(2, '0')}</div>
        </div>
      ))}
    </div>
  );
}

export default Countdown;