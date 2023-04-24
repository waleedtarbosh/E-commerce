import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import styles from "./CarouselMain.module.css";

function CarouselMain() {
  const items = [
    {
      src: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      alt: "Image 3",
      caption: "Electronics",
    },
    {
      src: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      alt: "Image 2",
      caption: "Jewelery",
    },
    {
      src: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      alt: "Image 4",
      caption: "womens clothing",
    },
    {
      src: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      alt: "Image 1",
      caption: "mens clothing",
    },
  ];

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
        {items.map((item, index) => (
          <Box
            key={index}
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
 
  marginRight: { md:'0px', sm: "-40%"},
}}
>
            <p className={styles.carouselCaption}>{item.caption}</p>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselMain;
