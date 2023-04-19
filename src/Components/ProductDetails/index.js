import React from "react";
import {
  productDetails,
  productIconData,
} from "../../data/productDetails/productDetails";
import Box from "@mui/material/Box";
import ProductPath from "./ProductPath";
import ProductQuantity from "./ProductQuantity";
import AvailableSizes from "./ProductQuantity/AvailableSizes";
import QuantityCounter from "./ProductQuantity/QuantityCounter";
import ProductImages from "./ProductImages";

const ProductDetails = () => {
  const {
    images,
    path,
    title,
    rating,
    price,
    inStock,
    discreption,
    sizes,
    availableColors,
  } = productDetails[0];

  return (
    <Box>
      <ProductImages images={images} />
      <ProductPath path={path} />
      <ProductQuantity
        sizes={sizes}
        availableColors={availableColors}
        productIconData={productIconData}
      />
    </Box>
  );
};

export default ProductDetails;
