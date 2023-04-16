import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from "./Icons.module.css";
export default function Icons() {
  const icons =[
    <FavoriteBorderOutlinedIcon/>,
    <ShoppingCartOutlinedIcon/>
  ]
    return (
     <div className={styles.Icons}>
         {icons.map((icon) => (
        <a href='#'>{icon}</a>
      ))}
      
     </div>
    );
  }