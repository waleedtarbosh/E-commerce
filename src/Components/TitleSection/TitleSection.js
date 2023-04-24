import React from "react";
import Countdown from "./Countdown/Countdown";
import styles from "./TitleSection.module.css";
import Title from "./Title/Title";
import Heading from "./Heading/Heading";
import { Box } from "@mui/material";

const TitleSection = ({ showCountdown, title, heading, RightPartOfTheSection }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' ,md:'row'},
        height: { xs: 'auto', sm: '103px' },
        justifyContent:{md: 'space-between'},
        alignItems: { xs: 'flex-start', sm: 'flex-end' },
        gap: { xs: '5px', sm: '87px' },
      }}
    >
      <div className={styles.container}>
        <Title Title={title} />
        <Heading Heading={heading} />
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'column' },
          gap: '5px',
          marginLeft: { xs: '0px', sm: '0px' },
        }}
      >
        <div className={styles.container}>
          <div className={`${styles.flexContainer} ${styles.Countdown}`}>
            <div>
              {showCountdown && (
                <Countdown days={3} hours={23} minutes={19} seconds={56} />
              )}
            </div>
            <Box
              sx={{
                marginLeft: {md:'0px', xs: '-260px' , sm:'-130px' },
                
              }}
            >
              {RightPartOfTheSection}
            </Box>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default TitleSection;
