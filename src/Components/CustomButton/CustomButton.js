import { Button } from "@mui/material";

const CustomButton = ({ content, backgroundColor }) => {
  return (
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
        display: "block"
      }}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
