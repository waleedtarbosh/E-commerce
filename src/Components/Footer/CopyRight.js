import styles from "./CopyRight.module.css";
import { Box } from "@mui/material";

export default function CopyRight() {
  return (
    <div className={styles.CopyRight}>
      <Box
        sx={{
          marginRight: { md: "0px", sm: "0", xs: "0" },
        }}
      >
        <p>© Copyright Rimel 2022. All right reserved</p>
      </Box>
    </div>
  );
}
