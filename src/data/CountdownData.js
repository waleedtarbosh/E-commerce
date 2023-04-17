import styles from "../Components/FlashSalesCountdownSection/Countdown/Countdown.module.css";
const countdownUnits = [
  {
    id: "days",
    label: "Days",
    value: 0,
    counterClass: styles.DaysCounter,
    labelClass: styles.days,
    valueClass: styles.heading,
  },
  {
    id: "hours",
    label: "Hours",
    value: 0,
    counterClass: styles.HoursCounter,
    labelClass: styles.hours,
    valueClass: styles.heading,
  },
  {
    id: "minutes",
    label: "Minutes",
    value: 0,
    counterClass: styles.MinutesCounter,
    labelClass: styles.minutes,
    valueClass: styles.heading,
  },
  {
    id: "seconds",
    label: "Seconds",
    value: 0,
    counterClass: styles.SecondsCounter,
    labelClass: styles.seconds,
    valueClass: styles.heading,
  },
];

const semiCircleClasses = [
  {
    id: "semiCircle1",
    cloneClass: styles.semiClone1,
    ellipse1: styles.ellipse18,
    ellipse2: styles.ellipse19,
  },
  {
    id: "semiCircle2",
    cloneClass: styles.semiClone2,
    ellipse1: styles.ellipse19,
    ellipse2: styles.ellipse20,
  },
  {
    id: "semiCircle3",
    cloneClass: styles.semiClone3,
    ellipse1: styles.ellipse21,
    ellipse2: styles.ellipse22,
  },
];

export { countdownUnits, semiCircleClasses };
