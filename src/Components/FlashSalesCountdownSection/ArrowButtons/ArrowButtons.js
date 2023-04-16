import styles from "./ArrowButtons.module.css";
const icons = [
  {
    arrowClass: "fas fa-arrow-left",
    containerClass: styles.leftArrow,
    iconArrowClass: styles.iconLeft,
    ellipseClass: styles.ellipse15,
  },
  {
    arrowClass: "fas fa-arrow-right",
    containerClass: styles.rightArrow,
    iconArrowClass: styles.iconRight,
    ellipseClass: styles.ellipse16,
  },
];
function ArrowButtons() {
  return (
    <div className={styles.ContainerArrow}>
      {icons.map((icon, index) => (
        <button key={index} className={styles.button}>
          <div className={icon.containerClass}>
            <div className={icon.iconArrowClass}>
              <div className={styles.vector}></div>
            </div>
            <div className={icon.ellipseClass}></div>
            <i className={`${styles.iconArrow} ${icon.arrowClass}`}></i>
          </div>
        </button>
      ))}
    </div>
  );
}
export default ArrowButtons;
