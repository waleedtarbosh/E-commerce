import { Typography, Box } from "@mui/material";
import CustomIcon from "./CustomIcon";
import { dataCategories } from "../../data/dataCategories";
import React from "react";
import styles from "./style.module.css";

const Categories = () => {
  return (
    <Box className={styles.main_box}>
      {dataCategories.map(({ label, id }) => (
        <Box key={id} className={styles.box_icons}>
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
