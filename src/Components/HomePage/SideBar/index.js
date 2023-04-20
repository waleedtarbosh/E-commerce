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
    name: "Electronics",
    nested: false,
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
      sx={{
        width: "100%",
        maxWidth: 217,
        bgcolor: "background.paper",
        "&::before": {
          content: "''",
          position: "absolute",
          height: 384,
          width: "1px",
          backgroundColor: "#b3b3b3",
          right: 0,
          top: "-40px",
        },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {sidBareItems.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          sx={{
            margin: "16px 0",
            height: 24,
            paddingRight: "16px",
            "&:first-child": { marginTop: 0 },
          }}
        >
          <ListItemButton>
            <ListItemText primary={item.name} />
            {item.nested && <ChevronRightIcon />}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;
