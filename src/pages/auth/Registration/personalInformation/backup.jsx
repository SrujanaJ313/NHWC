import React from "react";
import { useFormik } from "formik";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

export default function PersonalInfo() {
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

  return (
    <Card className="rounded-2xl shadow-xl p-4">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Personal Information
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <FormControl size="small" fullWidth>
                <InputLabel id="websiteAccessLocation-label">
                  Where are you accessing this website from?
                </InputLabel>
                <Select
                  labelId="websiteAccessLocation-label"
                  id="websiteAccessLocation"
                  name="websiteAccessLocation"
                  value={formik.values.websiteAccessLocation}
                  onChange={formik.handleChange}
                  label="Where are you accessing this website from?"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="Home">Home</MenuItem>
                  <MenuItem value="School">School</MenuItem>
                  <MenuItem value="Library">Library</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel id="websiteDiscoverySource-label">
                  How did you hear about this website?
                </InputLabel>
                <Select
                  labelId="websiteDiscoverySource-label"
                  id="websiteDiscoverySource"
                  name="websiteDiscoverySource"
                  value={formik.values.websiteDiscoverySource}
                  onChange={formik.handleChange}
                  label="How did you hear about this website?"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="Friend">Friend</MenuItem>
                  <MenuItem value="Online">Online</MenuItem>
                  <MenuItem value="School">School</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel id="hispanicOrLatino-label">
                  Are you of Hispanic or Latino heritage?
                </InputLabel>
                <Select
                  labelId="hispanicOrLatino-label"
                  id="hispanicOrLatino"
                  name="hispanicOrLatino"
                  value={formik.values.hispanicOrLatino}
                  onChange={formik.handleChange}
                  label="Are you of Hispanic or Latino heritage?"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Prefer not to say">
                    Prefer not to say
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <FormControl fullWidth size="small">
                <InputLabel id="race-label">
                  Race – Please check all that apply:
                </InputLabel>
                <Select
                  labelId="race-label"
                  id="race"
                  multiple
                  value={formik.values.race}
                  onChange={(event) => {
                    formik.setFieldValue("race", event.target.value);
                  }}
                  input={
                    <OutlinedInput label="Race – Please check all that apply:" />
                  }
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
              <FormControl size="small" fullWidth>
                <InputLabel id="disabilityStatus-label">
                  Do you have a disability?
                </InputLabel>
                <Select
                  labelId="disabilityStatus-label"
                  id="disabilityStatus"
                  name="disabilityStatus"
                  value={formik.values.disabilityStatus}
                  onChange={formik.handleChange}
                  label="Do you have a disability?"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="Prefer not to say">
                    Individual did not disclose (do not wish to answer)
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel id="highestEducationLevel-label">
                  Highest Education Level
                </InputLabel>
                <Select
                  labelId="highestEducationLevel-label"
                  id="highestEducationLevel"
                  name="highestEducationLevel"
                  value={formik.values.highestEducationLevel}
                  onChange={formik.handleChange}
                  label="Highest Education Level"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="High School">High School</MenuItem>
                  <MenuItem value="Bachelor's">Bachelor's</MenuItem>
                  <MenuItem value="Master's">Master's</MenuItem>
                  <MenuItem value="Doctorate">Doctorate</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <FormControl size="small" fullWidth>
                <InputLabel id="currentSchoolEnrollment-label">
                  Update info about current school enrollment
                </InputLabel>
                <Select
                  labelId="currentSchoolEnrollment-label"
                  id="currentSchoolEnrollment"
                  name="currentSchoolEnrollment"
                  value={formik.values.currentSchoolEnrollment}
                  onChange={formik.handleChange}
                  label="Update info about current school enrollment"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="Enrolled">Enrolled</MenuItem>
                  <MenuItem value="Not Enrolled">Not Enrolled</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel id="citizenshipStatus-label">
                  Citizenship Status
                </InputLabel>
                <Select
                  labelId="citizenshipStatus-label"
                  id="citizenshipStatus"
                  name="citizenshipStatus"
                  value={formik.values.citizenshipStatus}
                  onChange={formik.handleChange}
                  label="Citizenship Status"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="US Citizen">US Citizen</MenuItem>
                  <MenuItem value="Permanent Resident">
                    Permanent Resident
                  </MenuItem>
                  <MenuItem value="International">International</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel id="selectiveServiceRegistration-label">
                  Registered with Selective Service
                </InputLabel>
                <Select
                  labelId="selectiveServiceRegistration-label"
                  id="selectiveServiceRegistration"
                  name="selectiveServiceRegistration"
                  value={formik.values.selectiveServiceRegistration}
                  onChange={formik.handleChange}
                  label="Registered with Selective Service"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}
