import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from "./Icons.module.css";
export default function Icons() {
  const icons = [
    {
      id:1,
      icon:<FavoriteBorderOutlinedIcon/>,
    }
      ,
     {
      id:2,
      icon:<ShoppingCartOutlinedIcon/>,
     } 
      
  ]
  return (
    <div className={styles.Icons}>
      {icons.map((item) => (
        <a href='#' key={item.id}>{item.icon}</a>
      ))}

    </div>
  );
}