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
import { Container } from "@mui/material";

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
    <Container>
      <Box sx={{ marginLeft: { md: "70px", lg: "0px", xl: "0px" } }}>
        <Box sx={{ margin: "80px 0px" }}>
          <ProductPath path={path} />
        </Box>
        <Box
          sx={{
            display: { xl: "flex", lg: "flex", md: "block", xs: "block" },
          }}
        >
          <Box>
            <ProductImages images={images} />
          </Box>
          <Box
            sx={{
              marginLeft: { xl: "70px", lg: "65px", md: "20px" },
            }}
          >
            <Box>
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
            </Box>

            <Box>
              <Delivery deliveryData={deliveryData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
