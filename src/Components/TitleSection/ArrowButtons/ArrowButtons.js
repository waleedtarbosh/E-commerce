import styles from './ArrowButtons.module.css';
import { icons } from '../../../data/ArrowButtonsData';

function ArrowButtons() {
  return (
    <div className={styles.ContainerArrow}>
      {icons.map((icon) => (
        <button key={icon.id} className={styles.button}>
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