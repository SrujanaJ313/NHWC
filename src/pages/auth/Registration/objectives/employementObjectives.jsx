import React, { useState } from "react";
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
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CustomModal from "../../../../components/customModal/CustomModal";
import DialogContent from "@mui/material/DialogContent";
import SearchAction from "./SearchAction";

export default function EmploymentObjectives() {
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobDescription: "",
      workType: "",
      keyword: "",
      searchTitle:""
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [editActionForm, setEditActionForm] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => setEditActionForm(false);

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
            Employment Objectives
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              {/* Desired Job Title */}
              <Stack
                direction={isSmallScreen ? "column" : "row"}
                spacing={2}
                alignItems="center"
              >
                <Typography sx={{ minWidth: isSmallScreen ? "100%" : 250 }}>
                  Desired Job Title <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  size="small"
                  name="jobTitle"
                  value={formik.values.jobTitle}
                  onChange={formik.handleChange}
                  placeholder="Click on lookup button to search Occupation Code"
                  sx={{ minWidth: 450 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          sx={{ backgroundColor: "#dfeffc", borderRadius: 0 }}
                        >
                          <SearchIcon onClick={() => setEditActionForm(true)} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              {/* Job Description */}
              <Stack
                direction={isSmallScreen ? "column" : "row"}
                spacing={2}
                alignItems="center"
              >
                <Typography sx={{ minWidth: isSmallScreen ? "100%" : 250 }}>
                  Job Description
                </Typography>
                <TextField
                  size="small"
                  name="jobDescription"
                  value={formik.values.jobDescription}
                  onChange={formik.handleChange}
                  placeholder="Click on lookup button to search Occupation Code"
                  sx={{ minWidth: 450 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          sx={{ backgroundColor: "#dfeffc", borderRadius: 0 }}
                        >
                          <SearchIcon onClick={() => setEditActionForm(true)} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              {/* Preferred type of work seeking */}
              <Stack
                direction={isSmallScreen ? "column" : "row"}
                spacing={2}
                alignItems="start"
              >
                <Typography sx={{ minWidth: isSmallScreen ? "100%" : 250 }}>
                  Preferred type of work seeking{" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <FormControl size="small" sx={{ minWidth: 250 }} required>
                  <Select
                    name="workType"
                    value={formik.values.workType}
                    onChange={formik.handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>-- Select --</em>
                    </MenuItem>
                    <MenuItem value="Full-Time">Full-Time</MenuItem>
                    <MenuItem value="Part-Time">Part-Time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Desired Job Search Keyword */}
              <Stack
                direction={isSmallScreen ? "column" : "row"}
                spacing={2}
                alignItems="start"
              >
                <Typography sx={{ minWidth: isSmallScreen ? "100%" : 250 }}>
                  Desired Job Search Keyword{" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  size="small"
                  name="keyword"
                  value={formik.values.keyword}
                  onChange={formik.handleChange}
                  sx={{ minWidth: 250 }}
                />
              </Stack>
              {editActionForm && (
                <CustomModal
                  open={editActionForm}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  title="ONET Entries"
                  maxWidth={"lg"}
                  titleBgColor="#183084"
                  titleTextColor="white"
                  closeIconColor="white"
                >
                  <DialogContent>
                    <Stack
                      width="100%"
                      justifyContent="center"
                      alignItems="center"
                      mt={2}
                    >
                      <SearchAction formik={formik} handleClose={handleClose} />
                    </Stack>
                  </DialogContent>
                </CustomModal>
              )}
            </Stack>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
}
