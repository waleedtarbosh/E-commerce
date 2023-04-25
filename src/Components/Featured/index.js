import React from "react";
import { dataFeatured } from "../../data/dataFeatured";
import MediaCard from "../MediaCard";
import styles from "./style.module.css";
import { Box } from "@mui/material";

export default function Featured() {
  const cardProps = {
    titleClassName: styles.title,
    descriptionClassName: styles.description,
    buttonClassName: styles.button,
  };
  return (
    <Box className={styles.main_box}>
      {dataFeatured.map((item) => (
        <Box key={item.id} className={styles.featured_box}>
          <MediaCard {...item} {...cardProps} showImage />
        </Box>
      ))}
    </Box>
  );
}
