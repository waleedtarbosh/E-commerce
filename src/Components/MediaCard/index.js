import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import styles from "./style.module.css";
import dataMediaCard from "../../data/dataMediaCard";
import Countdown from "../TitleSection/Countdown/Countdown";

export default function MediaCard({
  image,
  title,
  description,
  button,
  titleClassName,
  descriptionClassName,
  buttonClassName,
  showCountdown,
  showImage,
}) {
  const data = dataMediaCard({
    title,
    description,
    button,
    titleClassName,
    descriptionClassName,
    buttonClassName,
  });

  return (
    <Box>
      {showImage && <img src={image} alt={title} />}
      <CardContent className={styles.text}>
        {data.map((item) => (
          <Typography key={item.id} {...item}>
            {item.value}
          </Typography>
        ))}
        {showCountdown && (
          <Countdown
            days={3}
            hours={23}
            minutes={19}
            seconds={56}
            countdown={styles.countdown}
            dayCounter={styles.dayCountdown}
            labelCounter={styles.label}
            valueCounter={styles.value}
            semiColone={styles.semiColone}
          />
        )}
      </CardContent>
    </Box>
  );
}
