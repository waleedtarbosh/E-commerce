import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Dropdown() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen((prev) => !prev);
 

  const handleClickAway = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
       
      <span>English</span>
      <ArrowDropDownIcon onClick={handleClick}/>
        {open ? (
          <Box >
            Arabic
          </Box>
        ) : null}
        
      </Box>
    </ClickAwayListener>
  );
}