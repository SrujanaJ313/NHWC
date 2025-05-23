import React from "react";
import { useFormik } from "formik";
import {
  Typography,
  FormControl,
  // InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  Stack,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Box,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export default function PersonalInfo() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      websiteAccessLocation: "",
      websiteDiscoverySource: "",
      hispanicOrLatino: "",
      race: [],
      disabilityStatus: "",
      highestEducationLevel: "",
      currentSchoolEnrollment: "",
      citizenshipStatus: "",
      alienUscisNumber: "",
      alienUscisNumberExpirationDate: null,
      selectiveServiceRegistration: "",
    },
    onSubmit: (values) => {
      console.log("PersonalInfo Values:", values);
    },
  });

  const raceOptions = [
    "White",
    "African American/Black",
    "American Indian/Alaskan Native",
    "Asian",
    "Hawaiian/Other Pacific Islander",
    "Other",
    "Individual did not disclose (I do not wish to answer)",
  ];

  const fields = [
    {
      label: "Where are you accessing this website from?",
      id: "websiteAccessLocation",
      options: ["Home", "School", "Library"],
    },
    {
      label: "How did you hear about this website?",
      id: "websiteDiscoverySource",
      options: ["Friend", "Online", "School"],
    },
    {
      label: "Are you of Hispanic or Latino heritage?",
      id: "hispanicOrLatino",
      options: ["Yes", "No", "Prefer not to say"],
    },
    { label: "Race – Please check all that apply:", id: "race", isMulti: true },
    {
      label: "Do you have a disability?",
      id: "disabilityStatus",
      options: ["No", "Yes", "Prefer not to say"],
    },
    {
      label: "Highest Education Level",
      id: "highestEducationLevel",
      options: ["High School", "Bachelor's", "Master's", "Doctorate"],
    },
    {
      label:
        "Update information relative to current enrollment in school information",
      id: "currentSchoolEnrollment",
      options: ["Enrolled", "Not Enrolled"],
    },
    {
      label: "Citizenship Status",
      id: "citizenshipStatus",
      options: ["US Citizen", "Permanent Resident", "International", "Other"],
    },
    { label: "Alien/USCIS Number", id: "alienUscisNumber", isText: true },
    {
      label: "Alien/USCIS Number Expiration Date",
      id: "alienUscisNumberExpirationDate",
      isDate: true,
    },
    {
      label: "Registered with Selective Service",
      id: "selectiveServiceRegistration",
      options: ["Yes", "No", "Not Applicable"],
    },
  ];

  return (
    <Card className="rounded-2xl shadow-xl p-4">
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
            Personal Information
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              {fields.map(({ label, id, options, isMulti, isText, isDate }) => (
                <Stack
                  direction={isSmallScreen ? "column" : "row"}
                  spacing={2}
                  alignItems={isSmallScreen ? "flex-start" : "center"}
                  key={id}
                >
                  <Typography sx={{ minWidth: isSmallScreen ? "100%" : 500 }}>
                    {label}
                  </Typography>
                  {isMulti ? (
                    <FormControl fullWidth size="small">
                      {/* <InputLabel id="race-label">{label}</InputLabel> */}
                      <Select
                        // labelId="race-label"
                        id="race"
                        multiple
                        value={formik.values.race}
                        onChange={(event) => {
                          formik.setFieldValue("race", event.target.value);
                        }}
                        input={<OutlinedInput label={label} />}
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {raceOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            <Checkbox
                              checked={formik.values.race.indexOf(option) > -1}
                            />
                            <ListItemText primary={option} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : isText ? (
                    <TextField
                      size="small"
                      name="keyword"
                      value={formik.values.alienUscisNumber}
                      onChange={(event) => {
                        formik.setFieldValue(
                          "alienUscisNumber",
                          event.target.value
                        );
                      }}
                      sx={{ minWidth: 250 }}
                    />
                  ) : isDate ? (
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        value={formik.values.alienUscisNumberExpirationDate}
                        onChange={(value) =>
                          formik.setFieldValue(
                            "alienUscisNumberExpirationDate",
                            value
                          )
                        }
                        slotProps={{ textField: { size: "small" } }}
                        sx={{minWidth:250}}
                      />
                    </LocalizationProvider>
                  ) : (
                    <FormControl size="small" fullWidth>
                      {/* <InputLabel id={`${id}-label`}>{label}</InputLabel> */}
                      <Select
                        // labelId={`${id}-label`}
                        id={id}
                        name={id}
                        value={formik.values[id]}
                        onChange={formik.handleChange}
                        // label={label}
                      >
                        <MenuItem value="">-- Select --</MenuItem>
                        {options.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </Stack>
              ))}
            </Stack>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
}
