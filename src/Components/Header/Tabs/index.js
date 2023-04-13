import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { data } from "./data";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "black",
          opacity: 0.5,
        },
      },
      defaultProps: {
        textColor: "#000",
      },
    },
  },
});
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="black"
          centered
        >
          {data.map((item, index) => {
            return <Tab key={index} {...item} />;
          })}
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
