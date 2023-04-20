import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Delivery = ({ deliveryData }) => {
  console.log(deliveryData);
  return (
    <Box sx={{ widht: "373px", marginTop: "35px" }}>
      {deliveryData &&
        deliveryData.map(({ id, icon, title, info }) => {
          return (
            <Box
              key={id}
              sx={{
                widht: "373px",
                display: "flex",
                margin: "0px 15px 0px 15px",
                border: "1px solid gray",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  margin: "20px 20px",
                }}
              >
                {icon}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: " #000000",
                    margin: " 15px 15px 8px 0px",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: " #000000",
                    margin: "0px 15px 15px 0px",
                  }}
                >
                  {info}
                </Typography>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default Delivery;
