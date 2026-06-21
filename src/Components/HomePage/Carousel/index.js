import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import styles from "./CarouselMain.module.css";
import MediaCard from "../../MediaCard";

import { carouselData as items } from "../../../data/carouselData";

export default function CarouselMain() {


  const cardProps = {
    titleClassName: styles.title,
    descriptionClassName: styles.description,
    buttonClassName: styles.button,
  };

  return (
    <Box className={styles.container} display="flex" justifyContent="center">
      <Carousel
        className={styles.carousel}
        autoPlay={true}
        animation="fade"
        interval={5000}
        indicators={true}
        navButtonsAlwaysVisible={false}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            display="flex"
            flexDirection="row-reverse"
            alignItems="center"
            justifyContent="space-between"
          >
            <img
              src={item.src}
              alt={item.alt}
              className={styles.carouselImage}
            />
            <Box
              sx={{
                marginRight: { md: "0px", sm: "-40%" },
                display: { md:'block',xs: "none"},
              }}
            >
              <MediaCard {...item} title={item.category} {...cardProps} />
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

