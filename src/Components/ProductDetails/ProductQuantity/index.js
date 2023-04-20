import React from "react";
import Box from "@mui/material/Box";
import AvailableColors from "../../ProductCard/AvailableColors";
import AvailableSizes from "./AvailableSizes";
import QuantityCounter from "./QuantityCounter";
import Button from "@mui/material/Button";
import CardIcons from "../../ProductCard/CardIcons";
import style from "./index.module.css";

const ProductQuantity = ({ sizes, availableColors, productIconData }) => {
  const { spanStyle } = style;
  return (
    <Box sx={{ marginTop: "24px" }}>
      <Box sx={{ display: "flex", textAlign: "center" }}>
        <span className={spanStyle}>Colours:</span>
        <AvailableColors availableColors={availableColors} />
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <span className={spanStyle}>Size:</span>
        <AvailableSizes sizes={sizes} />
      </Box>

      <Box sx={{ display: "flex", margin: "24px 0px" }}>
        <QuantityCounter />
        <Button
          variant="outlined"
          sx={{
            width: "165px",
            height: "44px",
            backgroundColor: "#DB4444",
            borderRadius: "4px",
            margin: "0px 16px",
            color: "#FFFFFF",
          }}
        >
          Buy Now
        </Button>
        <Box
          sx={{
            width: "50px",
            hright: "50px",
            border: "1px solid gray",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          {productIconData.map((icon) => {
            return <CardIcons {...icon} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductQuantity;
