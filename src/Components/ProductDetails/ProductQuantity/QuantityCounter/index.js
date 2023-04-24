import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import style from "./index.module.css";
import Box from "@mui/material/Box";

const QuantityCounter = () => {
  const [counter, setCounter] = useState(0);
  const { textStyle } = style;

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Button
        variant="outlined"
        onClick={handleRemove}
        sx={{
          width: "39px",
          height: "44px",
          backgroundColor: "#DB4444",
          borderRadius: " 0px 4px 4px 0px",
        }}
      >
        <RemoveIcon sx={{ color: "#000000" }} />
      </Button>
      <Box
        sx={{
          width: "65px",
          height: "44px",
          border: "1PX solid gray",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        <p className={textStyle}>{counter}</p>
      </Box>
      <Button
        variant="outlined"
        onClick={handleAdd}
        sx={{
          width: "39px",
          height: "44px",
          backgroundColor: "#DB4444",
          borderRadius: " 0px 4px 4px 0px",
        }}
      >
        <AddIcon sx={{ color: "#000000" }} />
      </Button>
    </Box>
  );
};

export default QuantityCounter;
