import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import styles from "./style.module.css";

export default function MediaCard({
  image,
  title,
  description,
  button,
  titleClassName,
  descriptionClassName,
  buttonClassName,
}) {
  const data = [
    {
      id: 1,
      variant: "h5",
      component: "div",
      className: titleClassName,
      value: title,
    },
    {
      id: 2,
      variant: "body2",
      component: "div",
      className: descriptionClassName,
      value: description,
    },
    {
      id: 3,
      variant: "button",
      component: "button",
      className: buttonClassName,
      value: button,
    },
  ];
  return (
    <Box>
      <img src={`./img/${image}`} alt="1" />
      <CardContent className={styles.text}>
        {data.map((item) => (
          <Typography key={item.id} {...item}>
            {item.value}
          </Typography>
        ))}
      </CardContent>
    </Box>
  );
}
