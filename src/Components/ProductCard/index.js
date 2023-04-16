import React from "react";
import BottomCardSection from "./BottomCardSection";
import TopCardSection from "./TopCardSection";

const ProductCard = ({
  id,
  title,
  price,
  oldPrice,
  disCount,
  category,
  image,
  rating: { rate, count },
  availableColors,
}) => {
  return (
    <>
      <TopCardSection disCount={disCount} image={image} id={id} />
      <BottomCardSection
        title={title}
        price={price}
        oldPrice={oldPrice}
        rate={rate}
        count={count}
        availableColors={availableColors}
        id={id}
      />
    </>
  );
};

export default ProductCard;
