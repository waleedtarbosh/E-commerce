import React from "react";
import {
  productDetails,
  productIconData,
} from "../../data/productDetails/productDetails";
import { deliveryData } from "../../data/deliveryData";
import Box from "@mui/material/Box";
import ProductPath from "./ProductPath";
import ProductQuantity from "./ProductQuantity";
import ProductImages from "./ProductImages";
import BottomCardSection from "../ProductCard/BottomCardSection";
import Delivery from "./Delivery";

const ProductDetails = () => {
  const {
    images,
    path,
    title,
    rating: { rate, count },
    price,
    inStock,
    descreption,
    sizes,
    availableColors,
  } = productDetails[0];

  return (
    <Box>
      <Box sx={{ margin: "80px 0px" }}>
        <ProductPath path={path} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <ProductImages images={images} />
        </Box>
        <Box sx={{ marginLeft: "70px" }}>
          <BottomCardSection
            title={title}
            rate={rate}
            count={count}
            price={price}
            inStock={inStock}
            description={descreption}
          />

          <ProductQuantity
            sizes={sizes}
            availableColors={availableColors}
            productIconData={productIconData}
            sx={{ marginTop: "24px" }}
          />
          <Delivery deliveryData={deliveryData} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
