// import { useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  // Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TableFooter,
  // FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const headersConfig = [
  {
    headerName: "Select",
    size: "10%",
  },
  {
    headerName: "Code",
    size: "25%",
  },
  {
    headerName: "Title",
    size: "25%",
  },
  {
    headerName: "Description",
    size: "40%",
  },
];

const mockData = [
  {
    code: "17-2051.00",
    title: "Civil Engineers",
    description:
      "Perform engineering duties in planning, designing, and overseeing construction and maintenance of building structures and facilities, such as roads, railroads, airports, bridges, harbors, channels, dams, irrigation projects, pipelines, power plants, and water and sewage systems.",
  },
  {
    code: "17-2051.00",
    title: "Architectural and Civil Drafters",
    description:
      "Perform engineering duties in planning, designing, and overseeing construction and maintenance of building structures and facilities, such as roads, railroads, airports, bridges, harbors, channels, dams, irrigation projects, pipelines, power plants, and water and sewage systems.",
  },
  {
    code: "17-2051.00",
    title: "Civil Engineering Technologists and Technicians",
    description:
      "Perform engineering duties in planning, designing, and overseeing construction and maintenance of building structures and facilities, such as roads, railroads, airports, bridges, harbors, channels, dams, irrigation projects, pipelines, power plants, and water and sewage systems.",
  },
  {
    code: "17-2051.00",
    title: "Water/WasteWater Engineers",
    description:
      "Perform engineering duties in planning, designing, and overseeing construction and maintenance of building structures and facilities, such as roads, railroads, airports, bridges, harbors, channels, dams, irrigation projects, pipelines, power plants, and water and sewage systems.",
  },
];

const mockDataArray = Array(10)
  .fill()
  .flatMap(() => [...mockData]);

const SearchAction = ({formik, handleClose}) => {
  return (
    <Stack width="100%" justifyContent="center" alignItems="center" mt={2}>
      <Stack width="100%" justifyContent="center" alignItems="center" mt={2}>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          padding={1}
        >
          <Typography sx={{ minWidth:150 }}>
            Please Enter Occupation
          </Typography>
          <TextField
            size="small"
            name="jobTitle"
            value={formik.values.searchTitle}
            onChange={formik.handleChange}
            // placeholder="Click on lookup button to search Occupation Code"
            sx={{ minWidth: 200 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    sx={{ backgroundColor: "#dfeffc", borderRadius: 0 }}
                  >
                    <SearchIcon onClick={() => {}} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <TableContainer
          component={Paper}
          sx={{ width: "90%", border: "2px solid #ccc", maxHeight: 400 }}
        >
          <Table stickyHeader>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                {headersConfig.map((headerConfig) => (
                  <TableCell
                    key={headerConfig.headerName}
                    sx={{
                      backgroundColor: "#183084",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "1rem",
                      borderRight: "2px solid white",
                      width: headerConfig.size,
                      padding: 0,
                    }}
                  >
                    {headerConfig.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody sx={{ overflow: "auto" }}>
              {mockDataArray.map((data) => (
                <TableRow key={data.title}>
                  <TableCell sx={{ borderRight: "2px solid #ccc" }}>
                    <Checkbox />
                  </TableCell>
                  <TableCell sx={{ borderRight: "2px solid #ccc" }}>
                    {data.code}
                  </TableCell>
                  <TableCell sx={{ borderRight: "2px solid #ccc" }}>
                    {data.title}
                  </TableCell>
                  <TableCell>{data.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow
                sx={{
                  position: "sticky",
                  zIndex: 1,
                  bottom: 0,
                  backgroundColor: 'background.paper',
                  // backgroundColor: "#dfeffc",
                }}
              >
                <TableCell colSpan={4}>
                  <Stack direction="row" spacing={1} justifyContent={"center"}>
                    <Button variant="contained" size="small" onClick={handleClose}>
                      Select
                    </Button>
                    <Button variant="contained" size="medium" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default SearchAction;
