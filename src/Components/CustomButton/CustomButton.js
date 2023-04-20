import { Button } from "@mui/material";

const CustomButton = ({ content, backgroundColor }) => {
    return (
        <Button
            sx={{
                position: "absolute",
                width: "210px",
                height: "41px",
                left: "0%",
                right: "0%",
                bottom: "0px",
                background: backgroundColor,
                borderRadius: "3px",
                color: "#FFFFFF",
                fontSize: "16px",
            }}
        >{ content }</Button>
    );
}

export default CustomButton;