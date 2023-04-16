import React from "react";
import BottomCardSection from "./BottomCardSection";
import TopCardSection from "./TopCardSection";

const ProductCard = ({
  id,
  title,
  price,
  oldPrice,
  disCount,
  image,
  rating: { rate, count },
  availableColors,
}) => {
  return (
    <>
      <TopCardSection disCount={disCount} image={image} />
      <BottomCardSection
        title={title}
        price={price}
        oldPrice={oldPrice}
        rate={rate}
        count={count}
        availableColors={availableColors}
      />
    </>
  );
};

export default ProductCard;
