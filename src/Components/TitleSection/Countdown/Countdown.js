import React from "react";
import styles from "./Countdown.module.css";
import { countdownUnits, semiCircleClasses } from "../../../data/CountdownData";

const Countdown = ({
  days,
  hours,
  minutes,
  seconds,
  countdown,
  dayCounter,
  labelCounter,
  valueCounter,
  semiColone,
}) => {
  // use the props passed to the component to update the values in countdownUnits
  countdownUnits[0].value = days;
  countdownUnits[1].value = hours;
  countdownUnits[2].value = minutes;
  countdownUnits[3].value = seconds;

  return (
    <div className={`${styles.group} ${countdown}`}>
      {semiCircleClasses.map((circle) => (
        <div className={`${circle.cloneClass} ${semiColone}`} key={circle.id}>
          <div className={`${circle.ellipse1} ${semiColone}`}></div>
          <div className={`${circle.ellipse2} ${semiColone}`}></div>
        </div>
      ))}

      {countdownUnits.map((unit) => (
        <div
          className={`${styles.counter} ${unit.counterClass} ${dayCounter}`}
          key={unit.id}
        >
          <div className={`${styles.label} ${unit.labelClass} ${labelCounter}`}>
            {unit.label}
          </div>
          <div className={` ${unit.valueClass} ${valueCounter}`}>
            {unit.value.toString().padStart(2, "0")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
