import Dropdown from "./Dropdown";
import styles from "./TopNav.module.css";

export default function TopNav() {
    return (
        <div className={styles.TopNav}>
         <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <a className={styles.link} href="#">ShopNow</a> </p>
         <Dropdown/>
        </div>    
    )
  }