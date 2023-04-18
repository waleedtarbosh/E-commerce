import React from "react";
import { dataCategoriesSale } from "../../data/dataCategoriesSale";
import MediaCard from "../MediaCard";
import styles from "./style.module.css";
import { Box } from "@mui/material";

export default function CategoriesSale() {
  const cardProps = {
    titleClassName: styles.title,
    descriptionClassName: styles.description,
    buttonClassName: styles.button,
  };
  return (
    <Box className={styles.categories_sale}>
      {dataCategoriesSale.map((item) => {
        return (
          <Box key={item.id} className={styles.featured_box}>
            <MediaCard {...item} {...cardProps} />
          </Box>
        );
      })}
    </Box>
  );
}
