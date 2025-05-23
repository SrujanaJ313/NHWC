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

export default function MilitaryInformation() {
  const formik = useFormik({
    initialValues: {
      caregiver: "",
      woundedMember: "",
      veteranStatus: "",
      spouseOrDependent: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
              color: "#fff",
              fontWeight: "bold",
              bgcolor: "#004785",
              display: "inline-block",
              ml: isSmallScreen ? 1 : 2,
            }}
          >
            Military Information
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              {/* Caregiver Question */}
              <FormControl component="fieldset">
                <Stack
                  direction={isSmallScreen ? "column" : "row"}
                  alignItems={isSmallScreen ? "flex-start" : "center"}
                  spacing={2}
                >
                  <Typography sx={{ width: isSmallScreen ? "100%" : 650 }}>
                    Are you a caregiver who is a spouse or family member to a
                    member of the armed forces who is wounded, ill or injured
                    and receiving treatment in a military facility or warrior
                    transition unit?
                  </Typography>
                  <RadioGroup
                    row={!isSmallScreen}
                    name="caregiver"
                    value={formik.values.caregiver}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="No"
                      control={<Radio size="small" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="Yes"
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                  </RadioGroup>
                </Stack>
              </FormControl>

              {/* Wounded Armed Forces Member */}
              <FormControl component="fieldset">
                <Stack
                  direction={isSmallScreen ? "column" : "row"}
                  alignItems={isSmallScreen ? "flex-start" : "center"}
                  spacing={2}
                >
                  <Typography sx={{ width: isSmallScreen ? "100%" : 650 }}>
                    Are you a member of the armed forces who is wounded, ill or
                    injured and receiving treatment in a military facility or
                    warrior transition unit?
                  </Typography>
                  <RadioGroup
                    row={!isSmallScreen}
                    name="woundedMember"
                    value={formik.values.woundedMember}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="No"
                      control={<Radio size="small" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="Yes"
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                  </RadioGroup>
                </Stack>
              </FormControl>

              {/* Veteran or Spouse of a Veteran */}
              <FormControl component="fieldset">
                <Stack
                  direction={isSmallScreen ? "column" : "row"}
                  alignItems={isSmallScreen ? "flex-start" : "center"}
                  spacing={2}
                >
                  <Typography sx={{ width: isSmallScreen ? "100%" : 650 }}>
                    Are you currently in the military, a veteran or the spouse
                    of a veteran?
                  </Typography>
                  <RadioGroup
                    row={!isSmallScreen}
                    name="veteranStatus"
                    value={formik.values.veteranStatus}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="No"
                      control={<Radio size="small" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="Yes"
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                  </RadioGroup>
                </Stack>
              </FormControl>

              {/* Spouse/Dependent of Active-Duty */}
              <FormControl size="small" required>
                <Stack
                  direction={isSmallScreen ? "column" : "row"}
                  alignItems={isSmallScreen ? "flex-start" : "center"}
                  spacing={2}
                >
                  <Typography sx={{ width: isSmallScreen ? "100%" : 650 }}>
                    Are you the Spouse/Dependent of someone in the active-duty
                    military service, National Guard or Reserves who is
                    currently activated?
                  </Typography>
                  <Select
                    name="spouseOrDependent"
                    value={formik.values.spouseOrDependent}
                    onChange={formik.handleChange}
                    displayEmpty
                    sx={{ minWidth: 200 }}
                  >
                    <MenuItem value="">
                      <em>-- Select --</em>
                    </MenuItem>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </Stack>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
}
