import React from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import style from "./index.module.css";
import AvailabelColors from "./AvailabelColors";

const BottomCardSection = ({
  title,
  price,
  oldPrice,
  rate,
  count,
  availabelColors,
}) => {
  const { priceStyle, oldPriceStyle, countStyle, bottomCardSectionStyle } =
    style;

  return (
    <div className={bottomCardSectionStyle}>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: 16,
          color: "#000000",
        }}
      >
        {title}
      </Typography>

      <div>
        <span className={priceStyle}>{`$${price}`}</span>
        {oldPrice && <span className={oldPriceStyle}>{`$${oldPrice}`}</span>}
      </div>

      <Rating
        value={rate}
        readOnly
        size="small"
        emptyIcon={
          <StarIcon
            style={{
              opacity: 0.55,
            }}
            fontSize="inherit"
          />
        }
      />
      <span className={countStyle}>{`(${count})`}</span>

      {availabelColors && <AvailabelColors availabelColors={availabelColors} />}
    </div>
  );
};

export default BottomCardSection;
