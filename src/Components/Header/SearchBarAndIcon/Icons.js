import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from "./Icons.module.css";
export default function Icons() {
    return (
     <div className={styles.Icons}>
      <a href='#'><FavoriteBorderOutlinedIcon/></a>
      <a href="#"><ShoppingCartOutlinedIcon/></a>
     </div>

    );
  }