import React from 'react';
import { useFormik } from 'formik';
import {
  Card,
  CardContent,
  TextField,
  Stack,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';

export default function CustomerProfile() {
  const formik = useFormik({
    initialValues: {
      username: '',
      firstName: '',
      middleInitial: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const inputProps = {
    size: 'small',
    fullWidth: true,
  };

  return (
    <Card className="rounded-2xl shadow-xl" sx={{boxShadow:3}}>
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
          Customer Profile
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={2}>
              <TextField
                id="username"
                name="username"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="middleInitial"
                name="middleInitial"
                label="Middle Initial"
                value={formik.values.middleInitial}
                onChange={formik.handleChange}
                {...inputProps}
              />
            </Box>

            <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={2}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                {...inputProps}
              />
              <TextField
                id="dob"
                name="dob"
                label="Date of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formik.values.dob}
                onChange={formik.handleChange}
                {...inputProps}
              />
            </Box>

            <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={2}>
              <FormControl size="small" fullWidth={isSmallScreen} sx={{ flex: 1 }} error={!!formik.values.gender}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  value={formik.values.gender}
                  label="Gender"
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">-- Select --</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {!!formik.values.gender && (
                  <FormHelperText>Gender is required</FormHelperText>
                )}
              </FormControl>
              <FormControl size="small" fullWidth={isSmallScreen} sx={{ flex: 1 }}></FormControl>
              <FormControl size="small" fullWidth={isSmallScreen} sx={{ flex: 1 }}></FormControl>
            </Box>
          </Stack>
        </form>
        </Box>
      </CardContent>
    </Card>
  );
}
