import MainFooter from "./MainFooter";
import CopyRight from "./CopyRight";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <MainFooter />
      <CopyRight />
    </div>
  );
}
