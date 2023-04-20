import SendIcon from "@mui/icons-material/Send";
import styles from "./TextField.module.css";
export default function TextField ()  {
    return (
      <div className={styles.TextField}>
        <input placeholder="Enter your email" ></input>
        <SendIcon sx={{ color: "white", cursor: "pointer" }} />
      </div>
    );
};
  