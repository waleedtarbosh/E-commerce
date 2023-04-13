import styles from './ArrowButtons.module.css';

function ArrowButtons() {
  return (
    <div className={styles.ContainerArrow}>
      <button className={styles.button}>
        <div className={styles.leftArrow}>
          <div className={styles.iconLeft}>
            <div className={styles.vector}></div>
          </div>
          <div className={styles.ellipse15}></div>
          <i className={`${styles.iconArrow} fas fa-arrow-left`}></i>
        </div>
      </button>
      <button className={styles.button}>
        <div className={styles.rightArrow}>
          <div className={styles.iconRight}>
            <div className={styles.vector}></div>
          </div>
          <div className={styles.ellipse16}></div>
          <i className={`${styles.iconArrow} fas fa-arrow-right`}></i>
        </div>
      </button>
    </div>
  );
}

export default ArrowButtons;
