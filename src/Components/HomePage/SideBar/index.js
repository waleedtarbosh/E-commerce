import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

let sidBareItems = [
  {
    name: "Woman’s Fashion",
    nested: true,
  },
  {
    name: "Men’s Fashion",
    nested: true,
  },
  {
    name: "Home & Lifestyle",
    nested: false,
  },
  {
    name: "Medicine",
    nested: false,
  },
  {
    name: "Sports & Outdoor",
    nested: false,
  },
  {
    name: "Baby’s & Toys",
    nested: false,
  },
  {
    name: "Groceries & Pets",
    nested: false,
  },
  {
    name: "Health & Beauty",
    nested: false,
  },
];

const SideBar = () => {

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {sidBareItems.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton >
            <ListItemText primary={item.name} />
            {item.nested && <ChevronRightIcon />}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;
