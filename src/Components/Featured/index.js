import React from "react";
import { data } from "./data";
import MediaCard from "../MediaCard";
import styles from "./style.module.css";
import { Box } from "@mui/material";

export default function Featured() {
  return (
    <Box className={styles.main_box}>
      {data.map((item, index) => (
        <Box key={index} className={styles.featured_box}>
          <MediaCard {...item} />
        </Box>
      ))}
    </Box>
  );
}
