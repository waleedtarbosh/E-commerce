import React from "react";
import Box from "@mui/material/Box";
import style from "./index.module.css";
import { useState } from "react";
import MainImage from "../MainImage";

const ProductImages = ({ images }) => {
  const { imageStyle } = style;
  const [isCliked, setIsCliked] = useState(1);
  return (
    <>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          justifyContent: "space-between",
          width: "700px",
        }}
      >
        <Box sx={{ marginRight: "30px", display: { xs: "flex", md: "block" } }}>
          {images.map(({ img, id }) => {
            return (
              <Box
                sx={{
                  width: { md: "170px", xs: "125px" },
                  marginRight: { md: "0px", xs: "15px" },
                  height: "138px",
                  backgroundColor: "#F5F5F5",
                  textAlign: "cenetr",
                  marginBottom: "16px",
                  borderRadius: "4px",
                }}
              >
                <img
                  onClick={() => {
                    setIsCliked(id);
                  }}
                  className={imageStyle}
                  key={id}
                  src={img}
                  alt="product"
                />
              </Box>
            );
          })}
        </Box>
        <MainImage id={isCliked} images={images} />
      </Box>
    </>
  );
};

export default ProductImages;
