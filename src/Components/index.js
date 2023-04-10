import Icons from "./Icons";
import SearchBar from "./SearchBar";
import styles from './style.module.css';
export default function SearchBarandIcons() {
    return (
     <div className={styles.Container}>
        <SearchBar/>
        <Icons/>
     </div>

    );
  }
