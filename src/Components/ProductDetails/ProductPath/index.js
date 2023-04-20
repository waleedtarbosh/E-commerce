import React from "react";
import Typography from "@mui/material/Typography";

const ProductPath = ({ path }) => {
  return (
    <>
      <Typography sx={{ fontSize: "14px" }}>{path}</Typography>
    </>
  );
};

export default ProductPath;
