import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { data } from "./data";
import { Box } from "@mui/material";
import styles from "./style.module.css";

export default function MediaCard() {
  return (
    <Box className={styles.main_box}>
      {data.map(({ image, title, description, index }) => {
        return (
          <Box key={index} className={styles.featured_box}>
            <img src={`./img/${image}`} alt="1" />
            <CardContent className={styles.text}>
              <Typography variant="h5" component="div" className={styles.title}>
                {title}
              </Typography>
              <Typography variant="body2" className={styles.description}>
                {description}
              </Typography>
              <Button size="small" className={styles.button}>
                Shop Now
              </Button>
            </CardContent>
          </Box>
        );
      })}
    </Box>
  );
}
