import React from "react";
import Box from "@mui/material/Box";
import style from "./index.module.css";

const MainImage = ({ id, images }) => {
  let mainImage = images.filter((iamge) => iamge["id"] === id);
  const { mainImageStyle } = style;

  return (
    <Box
      sx={{
        width: { md: "500px", xs: "535px" },
        height: "600px",
        backgroundColor: "#F5F5F5",
        textAlign: "cenetr",
        borderRadius: "4px",
      }}
    >
      <img
        src={mainImage[0].img}
        alt="selected product"
        className={mainImageStyle}
      ></img>
    </Box>
  );
};

export default MainImage;
