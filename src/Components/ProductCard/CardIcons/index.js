import React from "react";
import Avatar from "@mui/material/Avatar";

const CardIcons = ({ iconName, top, right }) => {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: "#FFFFFF",
          position: "absolute",
          top: top,
          right: right,
          width: 34,
          height: 34,
        }}
      >
        {iconName}
      </Avatar>
    </>
  );
};

export default CardIcons;
