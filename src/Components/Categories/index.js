import { Typography, Box } from "@mui/material";
import CustomIcon from "./CustomIcon";
import { data } from "./data";
import React from "react";
import styles from "./style.module.css";

const Categories = () => {
  return (
    <Box className={styles.main_box}>
      {data.map(({ label }, index) => (
        <Box key={index} className={styles.box_icons}>
          <CustomIcon iconName={label} className={styles.custom_icon} />
          <Typography variant="h6" sx={{ marginTop: "16px" }}>
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
