import * as React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Dropdown() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen((prev) => !prev);
  const handleClickAway = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          position: "relative",
          marginRight: { xs: "0", md: "115px", sm: "0", lg: "115px" },
          width: "78px",
          marginLeft: { xs: "20", md: "185px", sm: "20", lg: "185px" },
        }}
      >
        <span>English</span>
        <ArrowDropDownIcon onClick={handleClick} />
        {open ? <Box>Arabic</Box> : null}
      </Box>
    </ClickAwayListener>
  );
}
