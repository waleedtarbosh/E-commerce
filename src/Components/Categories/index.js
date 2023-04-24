import { Typography, Box, Grid } from "@mui/material";
import CustomIcon from "./CustomIcon";
import { dataCategories } from "../../data/dataCategories";
import React from "react";
import styles from "./style.module.css";

const Categories = () => {
  return (
    <Box className={styles.main_box}>
      <Grid container spacing={{ xs: 1, sm: 1, md: 4 }}>
        {dataCategories.map(({ label, id }) => (
          <Grid item key={id} xs={12} sm={5} md={2}>
            <Box className={styles.box_icons} sx={{ p: { xs: 1, sm: 0, md: 0 },marginLeft:{xs:'-20px'} }}>
              <CustomIcon iconName={label} className={styles.custom_icon} />
              <Typography variant="h6" sx={{ marginTop: "16px" }} align="center">
                {label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
