import React from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const CardIcons = () => {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: "#FFFFFF",
          position: "absolute",
          top: 12,
          right: 12,
          width: 34,
          height: 34,
        }}
      >
        <FavoriteBorderIcon sx={{ color: "#000000" }} />
      </Avatar>
      <Avatar
        sx={{
          bgcolor: "#FFFFFF",
          position: "absolute",
          top: 54,
          right: 12,
          width: 34,
          height: 34,
        }}
      >
        <VisibilityOutlinedIcon sx={{ color: "#000000" }} />
      </Avatar>
    </>
  );
};

export default CardIcons;
