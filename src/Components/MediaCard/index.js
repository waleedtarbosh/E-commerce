import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import styles from "./style.module.css";

export default function MediaCard({
  image,
  title,
  description,
  click,
  titleStyles,
  descriptionStyles,
  buttonStyles,
}) {
  return (
    <Box>
      <img src={`./img/${image}`} alt="1" />
      <CardContent className={styles.text}>
        <Typography
          variant="h5"
          component="div"
          className={styles.title}
          style={titleStyles && titleStyles(title)}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          style={descriptionStyles && descriptionStyles(description)}
          className={styles.description}
        >
          {description}
        </Typography>
        <Button
          size="small"
          className={styles.button}
          style={buttonStyles && buttonStyles(click)}
        >
          {click}
        </Button>
      </CardContent>
    </Box>
  );
}
