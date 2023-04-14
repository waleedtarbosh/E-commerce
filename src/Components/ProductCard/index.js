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
   availabelColors,
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
        availabelColors = {availabelColors}
      />
    </>
  );
};

export default ProductCard;
