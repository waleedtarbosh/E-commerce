import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AppService from "./AppService";
import { Box } from "@mui/material";
import styles from "./AppServices.module.css";

export default function AppServices() {
  const appServices = [
    {
      id: 1,
      Icon: <LocalShippingOutlinedIcon sx={{ color: "white" }} />,
      Title: "FREE AND FAST DELIVERY",
      Description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      Icon: <HeadsetMicOutlinedIcon sx={{ color: "white" }} />,
      Title: "24/7 CUSTOMER SERVICE",
      Description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      Icon: <VerifiedUserOutlinedIcon sx={{ color: "white" }} />,
      Title: "MONEY BACK GUARANTEE",
      Description: "We return money within 30 days",
    },
  ];

  return (
    <Box
      className={styles.ServicesCounter}
      display="flex"
      flexDirection={{ xs: "column", sm: "row", md: "row" }}
      flexWrap="wrap"
      justifyContent="space-between"
      marginRight={{ md: "0px", xs: "0", sm: "0" }}
    >
      {appServices.map((item) => (
        <Box
          key={item.id}
          width={{ xs: "100%", sm: "calc(50% - 8px)", md: "calc(33.3% - 8px)" }}
          mb={{ xs: 2, sm: 2, md: 0 }}
          mr={{ xs: 0, sm: 0, md: 1 }}
        >
          <AppService
            title={item.Title}
            description={item.Description}
            serviceIcon={item.Icon}
          />
        </Box>
      ))}
    </Box>
  );
}
