import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import QR from "./Images/QR.png";
import GooglePlayAppStore from "./Images/GooglePlayAppStore.png";
import styles from "./Dwonloads.module.css";
export default function Downloads() {
  return (
    <div>
      <div>
        <img src={QR} alt="QR code" width="76px" height="76px" />
        <img
          src={GooglePlayAppStore}
          alt="Google play and app store"
          width="104px"
          height="76px"
        />
      </div>
      <div className={styles.Icons}>
        <Facebook />
        <Twitter />
        <Instagram />
        <LinkedIn />
      </div>
    </div>
  );
};
  
  