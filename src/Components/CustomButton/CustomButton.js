import { Box, Button } from "@mui/material";

const CustomButton = ({ content, backgroundColor }) => {
  return (
    <Box sx={{ marginRight: { xs: "750px", md: "0px", sm: "400px" } }}>
      <Button
        sx={{
          width: "210px",
          height: "41px",
          right: "0%",
          background: backgroundColor,
          borderRadius: "3px",
          color: "#FFFFFF",
          fontSize: "16px",
          margin: "60px auto",
          display: "block",
          "&:hover": {
            background: backgroundColor,
            opacity: "0.7",
          },
        }}
      >
        {content}
      </Button>
    </Box>
  );
};

export default CustomButton;
