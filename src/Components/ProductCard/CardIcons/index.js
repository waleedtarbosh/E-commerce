import React from "react";
import Avatar from "@mui/material/Avatar";

const CardIcons = ({
  iconName,
  top,
  right,
  backgroundColor,
  variant,
  position,
}) => {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: backgroundColor,
          position: position || "static",
          top: top || "",
          right: right || "",
          width: 34,
          height: 34,
          variant: variant || "",
          cursor: "pointer",
        }}
      >
        {iconName}
      </Avatar>
    </>
  );
};

export default CardIcons;
