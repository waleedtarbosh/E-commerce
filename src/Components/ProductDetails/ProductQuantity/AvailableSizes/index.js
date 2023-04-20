import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

const AvailableSizes = ({ sizes }) => {
  const [isSelected, SetSelected] = useState(0);

  const handleClick = (id) => {
    SetSelected(id);
  };
  return (
    <>
      {sizes.map(({ size, id }) => {
        return (
          <Button
            key={id}
            sx={{
              width: "32px",
              height: "32px",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#000000",
              border: "1px solid gray",
              padding: 2.5,
              marginRight: "15px",
              backgroundColor: isSelected === id ? "#DB4444" : "#FFFFFF",
            }}
            onClick={() => handleClick(id)}
          >
            {size}
          </Button>
        );
      })}
    </>
  );
};

export default AvailableSizes;
