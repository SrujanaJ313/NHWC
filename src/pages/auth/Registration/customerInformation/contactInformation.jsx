import React from "react";
import { useFormik } from "formik";
import {
  Card,
  CardContent,
  TextField,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  Stack,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function ContactInformation() {
  const formik = useFormik({
    initialValues: {
      physicalAddressLine1: "",
      physicalAddressLine2: "",
      physicalAddressCity: "",
      physicalAddressCountry: "United States",
      physicalAddressState: "New Hampshire",
      physicalAddressOtherState: "",
      physicalAddressZip: "",
      physicalAddressCounty: "",
      mailingAddressLine1: "",
      mailingAddressLine2: "",
      mailingAddressCity: "",
      mailingAddressCountry: "United States",
      mailingAddressZip: "",
      mailingAddressCounty: "",
      primaryPhoneNumber: "",
      primaryPhoneType: "",
      secondaryPhoneNumber: "",
      secondaryPhoneType: "",
      preferredContactEmail: false,
      preferredContactMail: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputProps = {
    size: "small",
    fullWidth: true,
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card className="rounded-2xl shadow-xl p-4" sx={{boxShadow:3}}>
      <CardContent>
      <Box
        component="fieldset"
        sx={{
          border: '1px solid #c5dbec',
          borderRadius: 1,
          p: isSmallScreen ? 1 : 3,
          m: 0,
          position: 'relative',
        }}
      >
          <Typography
          component="legend"
          sx={{
            px: 2,
            fontSize: isSmallScreen ? '1rem' : '1.25rem',
            color: '#fff',
            fontWeight:'bold',
            bgcolor: '#004785',
            display: 'inline-block',
            ml: isSmallScreen ? 1 : 2,
          }}
        >
          Contact Information
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            {/* Physical Address */}
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField
                id="physicalAddressLine1"
                name="physicalAddressLine1"
                label="Physical Address Line 1"
                value={formik.values.physicalAddressLine1}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="physicalAddressLine2"
                name="physicalAddressLine2"
                label="Physical Address Line 2"
                value={formik.values.physicalAddressLine2}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="physicalAddressCity"
                name="physicalAddressCity"
                label="Physical Address City"
                value={formik.values.physicalAddressCity}
                onChange={formik.handleChange}
                {...inputProps}
              />
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField
                id="physicalAddressCountry"
                name="physicalAddressCountry"
                label="Physical Address Country"
                value={formik.values.physicalAddressCountry}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="physicalAddressState"
                name="physicalAddressState"
                label="Physical Address State"
                value={formik.values.physicalAddressState}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="physicalAddressOtherState"
                name="physicalAddressOtherState"
                label="Physical Address Other State"
                value={formik.values.physicalAddressOtherState}
                onChange={formik.handleChange}
                {...inputProps}
              />
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField
                id="physicalAddressZip"
                name="physicalAddressZip"
                label="Physical Address Zip"
                value={formik.values.physicalAddressZip}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <FormControl size="small" fullWidth>
                <InputLabel id="physicalAddressCounty-label">
                  Physical Address County
                </InputLabel>
                <Select
                  labelId="physicalAddressCounty-label"
                  id="physicalAddressCounty"
                  name="physicalAddressCounty"
                  value={formik.values.physicalAddressCounty}
                  onChange={formik.handleChange}
                  label="Physical Address County"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="county1">County 1</MenuItem>
                  <MenuItem value="county2">County 2</MenuItem>
                </Select>
              </FormControl>
              {/* <div style={{ flex: 1 }}></div> */}
              <FormControl size="small" fullWidth></FormControl>
            </Stack>

            {/* Mailing Address */}
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField
                id="mailingAddressLine1"
                name="mailingAddressLine1"
                label="Mailing Address Line 1"
                value={formik.values.mailingAddressLine1}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="mailingAddressLine2"
                name="mailingAddressLine2"
                label="Mailing Address Line 2"
                value={formik.values.mailingAddressLine2}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="mailingAddressCity"
                name="mailingAddressCity"
                label="Mailing Address City"
                value={formik.values.mailingAddressCity}
                onChange={formik.handleChange}
                {...inputProps}
              />
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField
                id="mailingAddressCountry"
                name="mailingAddressCountry"
                label="Mailing Address Country"
                value={formik.values.mailingAddressCountry}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="mailingAddressZip"
                name="mailingAddressZip"
                label="Mailing Address Zip"
                value={formik.values.mailingAddressZip}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <FormControl size="small" fullWidth>
                <InputLabel id="mailingAddressCounty-label">
                  Mailing Address County
                </InputLabel>
                <Select
                  labelId="mailingAddressCounty-label"
                  id="mailingAddressCounty"
                  name="mailingAddressCounty"
                  value={formik.values.mailingAddressCounty}
                  onChange={formik.handleChange}
                  label="Mailing Address County"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="county1">County 1</MenuItem>
                  <MenuItem value="county2">County 2</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            {/* Phone Numbers */}
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField
                id="primaryPhoneNumber"
                name="primaryPhoneNumber"
                label="Primary Phone Number"
                value={formik.values.primaryPhoneNumber}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <FormControl size="small" fullWidth>
                <InputLabel id="primaryPhoneType-label">
                  Primary Phone Type
                </InputLabel>
                <Select
                  labelId="primaryPhoneType-label"
                  id="primaryPhoneType"
                  name="primaryPhoneType"
                  value={formik.values.primaryPhoneType}
                  onChange={formik.handleChange}
                  label="Primary Phone Type"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="Mobile">Mobile</MenuItem>
                  <MenuItem value="Home">Home</MenuItem>
                  <MenuItem value="Work">Work</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="secondaryPhoneNumber"
                name="secondaryPhoneNumber"
                label="Secondary Phone Number"
                value={formik.values.secondaryPhoneNumber}
                onChange={formik.handleChange}
                {...inputProps}
              />
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <FormControl size="small" fullWidth>
                <InputLabel id="secondaryPhoneType-label">
                  Secondary Phone Type
                </InputLabel>
                <Select
                  labelId="secondaryPhoneType-label"
                  id="secondaryPhoneType"
                  name="secondaryPhoneType"
                  value={formik.values.secondaryPhoneType}
                  onChange={formik.handleChange}
                  label="Secondary Phone Type"
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="Mobile">Mobile</MenuItem>
                  <MenuItem value="Home">Home</MenuItem>
                  <MenuItem value="Work">Work</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth></FormControl>
              <FormControl size="small" fullWidth></FormControl>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography
                variant="body1"
                // sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 1, sm: 0 } }}
              >
                Mailing Address same as Physical Address?:
              </Typography>

              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={2}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      id="preferredContactEmail"
                      name="preferredContactEmail"
                      checked={formik.values.preferredContactEmail}
                      onChange={formik.handleChange}
                    />
                  }
                />
              </Box>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography
                variant="body1"
              >
                Preferred method of Contact:
              </Typography>

              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={2}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      id="preferredContactEmail"
                      name="preferredContactEmail"
                      checked={formik.values.preferredContactEmail}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Email"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      id="preferredContactMail"
                      name="preferredContactMail"
                      checked={formik.values.preferredContactMail}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Mail"
                />
              </Box>
            </Stack>
          </Stack>
        </form>
        </Box>
      </CardContent>
    </Card>
  );
}
