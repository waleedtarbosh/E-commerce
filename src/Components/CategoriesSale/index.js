import React from "react";
import { data } from "./data";
import MediaCard from "../MediaCard";
import styles from "./style.module.css";
import { Box } from "@mui/material";
import {
  setButtonStyles,
  setDescriptionStyles,
  setTitleStyles,
} from "./FunctionStyle";

export default function CategoriesSale() {
  return (
    <Box className={styles.categories_sale}>
      {data.map((item, index) => {
        return (
          <Box key={index} className={styles.featured_box}>
            <MediaCard
              titleStyles={setTitleStyles}
              descriptionStyles={setDescriptionStyles}
              buttonStyles={setButtonStyles}
              {...item}
            />
          </Box>
        );
      })}
    </Box>
  );
}
