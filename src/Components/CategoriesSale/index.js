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

   <Box
  className={styles.categories_sale}
  sx={{
    width: { md:'1170px',xs: "390px", sm: "835px" },
    height: { md:'500px',xs: "471px", sm: "500px"},
    marginRight: { xs: "900px", sm: "400px" },
    "& img": {
      width: { xs: "475px", sm: "auto" },
      height: { xs: "300px", sm: "auto" },
      left: { xs: "-20%", sm: "35%" },
    },
  }}
>
      {dataCategoriesSale.map((item) => {
        return (
          <Box key={item.id} className={styles.featured_box}>
            <MediaCard {...item} {...cardProps} showCountdown showImage />
          </Box>
        );
      })}
    </Box>
  );
}
