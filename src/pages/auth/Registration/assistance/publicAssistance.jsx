import React from "react";
import { useFormik } from "formik";
import {
  Card,
  CardContent,
  TextField,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function PublicAssistance() {
  const formik = useFormik({
    initialValues: {
      tanf: "",
      snap: "",
      generalAssistance: "",
      refugeeAssistance: "",
      fosterCare: "",
      householdSize: "",
      totalIncome: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const renderRadioField = (label, name) => (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={2}
      alignItems={isSmallScreen ? "flex-start" : "center"}
      flexWrap="wrap"
    >
      <Typography
        variant="body1"
        sx={{
          flex: 1,
          minWidth: isSmallScreen ? "100%" : "300px",
          fontWeight: 500,
        }}
      >
        {label} <span style={{ color: "red" }}>*</span>
      </Typography>
      <RadioGroup
        row
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
      >
        <FormControlLabel value="No" control={<Radio size="small" />} label="No" />
        <FormControlLabel value="Yes" control={<Radio size="small" />} label="Yes" />
      </RadioGroup>
    </Stack>
  );

  return (
    <Card className="rounded-2xl shadow-xl" sx={{ boxShadow: 3 }}>
      <CardContent>
        <Box
          component="fieldset"
          sx={{
            border: "1px solid #c5dbec",
            borderRadius: 1,
            p: isSmallScreen ? 2 : 4,
            position: "relative",
          }}
        >
          <Typography
            component="legend"
            sx={{
              px: 2,
              fontSize: isSmallScreen ? "1rem" : "1.25rem",
              color: "#fff",
              fontWeight: "bold",
              bgcolor: "#004785",
              display: "inline-block",
              ml: 1,
            }}
          >
            Public Assistance
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              {renderRadioField(
                "Has your household received Temporary Assistance for Needy Families (TANF) payments?",
                "tanf"
              )}
              {renderRadioField(
                "Have you been determined eligible for or received Supplemental Nutrition Assistance Program (SNAP formerly known as Food Stamps)?",
                "snap"
              )}
              {renderRadioField(
                "Have you received General Assistance Payments?",
                "generalAssistance"
              )}
              {renderRadioField(
                "Have you received Refugee Cash Assistance Payments?",
                "refugeeAssistance"
              )}
              {renderRadioField(
                "Have you been supported through the State's Foster Care System?",
                "fosterCare"
              )}

              <Stack
                direction={isSmallScreen ? "column" : "row"}
                spacing={2}
                alignItems={isSmallScreen ? "flex-start" : "center"}
                flexWrap="wrap"
              >
                <Typography
                  sx={{
                    flex: 1,
                    minWidth: isSmallScreen ? "100%" : "300px",
                    fontWeight: 500,
                  }}
                >
                  Number of individuals living in your household:{" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  size="small"
                  name="householdSize"
                  value={formik.values.householdSize}
                  onChange={formik.handleChange}
                  sx={{ maxWidth: 250, width: "100%" }}
                />
              </Stack>

              <Stack
                direction={isSmallScreen ? "column" : "row"}
                spacing={2}
                alignItems={isSmallScreen ? "flex-start" : "center"}
                flexWrap="wrap"
              >
                <Typography
                  sx={{
                    flex: 1,
                    minWidth: isSmallScreen ? "100%" : "300px",
                    fontWeight: 500,
                  }}
                >
                  Total income earned within the last 6 months:{" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  size="small"
                  name="totalIncome"
                  value={formik.values.totalIncome}
                  onChange={formik.handleChange}
                  sx={{ maxWidth: 250, width: "100%" }}
                />
              </Stack>
            </Stack>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PublicAssistance;
