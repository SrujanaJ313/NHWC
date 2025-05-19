import React from "react";
import CustomerProfile from "./customerProfile";
import ContactInformation from "./contactInformation";
import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";

function CustomerInformation() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component="fieldset"
      sx={{
        border: "1px solid lightgray",
        borderRadius: 1,
        p: isSmallScreen ? 1 : 3,
        m: 0,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
        margin: "1%"
      }}
    >
      <Typography
        component="legend"
        sx={{
          // px: 2,
          fontSize: isSmallScreen ? "1rem" : "1.25rem",
          color: "#ffffff",
          fontWeight: "bold",
          bgcolor: "#5c9ccc",
          display: "inline-block",
          // ml: isSmallScreen ? 1 : 2,
          width: "100%",
          textAlign: "center",
        }}
      >
        General Information
      </Typography>
      <CustomerProfile />
      <ContactInformation />
    </Box>
  );
}

export default CustomerInformation;
