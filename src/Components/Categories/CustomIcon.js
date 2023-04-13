import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";
import WatchIcon from "@mui/icons-material/Watch";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Icon } from "@mui/material";
import styles from "./style.module.css";

export default function CustomIcon(props) {
  const { iconName } = props;
  let icon;
  switch (iconName) {
    case `Phone`:
      icon = <PhoneAndroidIcon className={styles.custom_icon} />;
      break;
    case `Computer`:
      icon = <ComputerIcon className={styles.custom_icon} />;
      break;
    case `Watch`:
      icon = <WatchIcon className={styles.custom_icon} />;
      break;
    case `Camera`:
      icon = <CameraAltIcon className={styles.custom_icon} />;
      break;
    case `Headphones`:
      icon = <HeadphonesIcon className={styles.custom_icon} />;
      break;
    case `Videogame`:
      icon = <VideogameAssetIcon className={styles.custom_icon} />;
      break;
    default:
      icon = null;
      break;
  }

  return <Icon className={styles.custom_icon}>{icon}</Icon>;
}
