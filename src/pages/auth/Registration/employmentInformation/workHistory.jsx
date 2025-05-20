import React from "react";
import { useFormik } from "formik";
import {
  Card,
  CardContent,
  // TextField,
  Stack,
  MenuItem,
  Typography,
  FormControl,
  // InputLabel,
  Select,
  // FormHelperText,
  useMediaQuery,
  useTheme,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function WorkHistory() {
  const formik = useFormik({
    initialValues: {
      employmentStatus: "",
      businessType: "",
      farmworker: "No",
    },
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const inputProps = {
  //   size: "small",
  //   fullWidth: true,
  // };

  return (
    <Card className="rounded-2xl shadow-xl" sx={{ boxShadow: 3 }}>
      <CardContent>
        <Box
          component="fieldset"
          sx={{
            border: "1px solid #c5dbec",
            borderRadius: 1,
            p: isSmallScreen ? 1 : 3,
            m: 0,
            position: "relative",
          }}
        >
          <Typography
            component="legend"
            sx={{
              px: 2,
              fontSize: isSmallScreen ? "1rem" : "1.25rem",
              color: "#2e6e9e",
              fontWeight: "bold",
              bgcolor: "#dfeffc",
              display: "inline-block",
              ml: isSmallScreen ? 1 : 2,
            }}
          >
            Work History
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              {/* Employment Status Field */}
              <Stack
                direction={isSmallScreen ? "column" : "row"}
                // alignItems="center"
                spacing={2}
              >
                <Typography sx={{ minWidth: 250 }}>
                  Current Employment Status
                </Typography>
                <FormControl required size="small" sx={{ minWidth: 250 }}>
                  <Select
                    id="employmentStatus"
                    name="employmentStatus"
                    value={formik.values.employmentStatus}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Full Time">Working Full Time</MenuItem>
                    <MenuItem value="Part Time">Working Part Time</MenuItem>
                    <MenuItem value="Unemployed">Unemployed</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Business Type Field */}
              <Stack
                direction={isSmallScreen ? "column" : "row"}
                // alignItems="center"
                spacing={2}
              >
                <Typography sx={{ minWidth: 250 }}>
                  Type of Business Worked In
                </Typography>
                <FormControl required size="small" sx={{ minWidth: 250 }}>
                  <Select
                    id="businessType"
                    name="businessType"
                    value={formik.values.businessType}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Non-Profit">Non-Profit</MenuItem>
                    <MenuItem value="For-Profit">For-Profit</MenuItem>
                    <MenuItem value="Government">Government</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Radio Buttons */}
              <Stack
                direction={isSmallScreen ? "column" : "row"}
                alignItems={isSmallScreen ? "flex-start" : "center"}
                spacing={2}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ minWidth: isSmallScreen ? "100%" : 250 }}
                >
                  Have you worked as a farmworker in the last 12 months?
                </Typography>

                <RadioGroup
                  row={!isSmallScreen}
                  name="farmworker"
                  value={formik.values.farmworker}
                  onChange={formik.handleChange}
                sx={{minWidth:250}}
                >
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                </RadioGroup>
              </Stack>
            </Stack>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
}
