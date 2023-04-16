import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardIcons from "../CardIcons";
import style from "./index.module.css";
import { useState } from "react";

const TopCardSection = ({ disCount, image }) => {
  const { imgStyle } = style;
  const [isShownButton, setIsShownButton] = useState(false);

  let backgroundColor = "#00FF66";

  if (disCount !== "NEW") {
    disCount = `-${disCount}%`;
    backgroundColor = "#DB4444";
  }

  return (
    <Card
      onMouseEnter={() => setIsShownButton(true)}
      onMouseLeave={() => setIsShownButton(false)}
      sx={{
        width: 270,
        height: 250,
        bgcolor: "#F5F5F5",
        borderRadius: 4,
        position: "relative",
        textAlign: "center",
      }}
    >
      <CardIcons />

      {disCount && (
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 12,
            color: "#FAFAFA",
            textAlign: "center",
            padding: "4px 12px",
            gap: 10,
            borderRadius: 2,
            background: backgroundColor,
            position: "absolute",
            top: 12,
            left: 12,
            width: 55,
          }}
        >
          {disCount}
        </Typography>
      )}

      <img src={image} alt="product" className={imgStyle}></img>

      {isShownButton && (
        <Button
          sx={{
            position: "absolute",
            width: "270px",
            height: "41px",
            left: "0%",
            right: "0%",
            bottom: "0px",
            background: "#000000",
            borderRadius: "0px 0px 4px 4px",
            color: "#FFFFFF",
            fontSize: "16px",
          }}
        >
          Add To Cart
        </Button>
      )}
    </Card>
  );
};

export default TopCardSection;
