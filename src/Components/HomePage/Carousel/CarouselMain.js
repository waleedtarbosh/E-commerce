import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import styles from "./CarouselMain.module.css";
import MediaCard from "../../MediaCard";

function CarouselMain() {
  const items = [
    {
      src: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      alt: "Image 3",
      category: "Electronics",
      button: "shop naw",
      description: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    },
    {
      src: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      alt: "Image 2",
      category: "Jewelery",
      button: "shop naw",
      description:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    },
    {
      src: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      alt: "Image 4",
      category: "womens clothing",
      button: "shop naw",
      description: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    },
    {
      src: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      alt: "Image 1",
      category: "mens clothing",
      button: "shop naw",
      description: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
  ];

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

export default CarouselMain;
