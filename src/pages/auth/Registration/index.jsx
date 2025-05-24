import React, { useState } from "react";
import CustomerInformation from "./customerInformation";
import PersonalInformation from "./personalInformation";
import EmploymentInformation from "./employmentInformation";
import Objectives from "./objectives";
import Military from "./Military";
import Assistance from "./assistance";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  Box,
  useTheme,
} from "@mui/material";

const STEPS = [
  {
    label: "General Information",
    active: true,
    stepNumber: 0,
    // completionStatus: "N",
    bgColor: "#183084",
    color: "white",
    component: CustomerInformation,
  },
  {
    label: "Personal Information",
    active: false,
    stepNumber: 1,
    // completionStatus: "N",
    bgColor: "#fff",
    color: "black",
    component: PersonalInformation,
  },
  {
    label: "Employment Information and History",
    active: false,
    stepNumber: 2,
    // completionStatus: "N",
    bgColor: "#fff",
    color: "black",
    component: EmploymentInformation,
  },
  {
    label: "Objectives",
    active: false,
    stepNumber: 3,
    // completionStatus: "N",
    bgColor: "#fff",
    color: "black",
    component: Objectives,
  },
  {
    label: "Military",
    active: false,
    stepNumber: 4,
    // completionStatus: "N",
    bgColor: "#fff",
    color: "black",
    component: Military,
  },
  {
    label: "Public Assistance",
    active: false,
    stepNumber: 5,
    // completionStatus: "N",
    bgColor: "#fff",
    color: "black",
    component: Assistance,
  },
];

function Registration() {
  const theme = useTheme();
  const [steps, setSteps] = useState(STEPS);
  const [activeStep, setActiveStep] = useState(STEPS[0]);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleNextNavigation = () => {
    const currentActiveStep = activeStep.stepNumber + 1;
    const changedSteps = steps.map((step) => {
      if (step.stepNumber === currentActiveStep) {
        return { ...step, active: true, bgColor: "#183084", color: "white" };
      } else if (step.stepNumber < currentActiveStep) {
        return {
          ...step,
          active: false,
          // completionStatus: "Y",
          bgColor: "#a0d2a8",
          color: "#183084",
        };
      } else {
        return step;
      }
    });
    setActiveStep(STEPS[currentActiveStep]);
    setSteps(changedSteps);
  };

  const handleBackNavigation = () => {
    const currentActiveStep = activeStep.stepNumber - 1;
    const changedSteps = steps.map((step) => {
      if (step.stepNumber === currentActiveStep) {
        return { ...step, active: true, bgColor: "#183084", color: "white" };
      } else if (step.stepNumber > currentActiveStep) {
        return {
          ...step,
          active: false,
          // completionStatus: "Y",
          bgColor: "#fff",
          color: "black",
        };
      } else {
        return step;
      }
    });
    setActiveStep(STEPS[currentActiveStep]);
    setSteps(changedSteps);
  };
  return (
    <Stack margin="1%">
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
        }}
      >
        <Typography
          component="legend"
          sx={{
            // px: 2,
            fontSize: isSmallScreen ? "1rem" : "1.25rem",
            color: "#fff",
            fontWeight: "bold",
            bgcolor: "#004785",
            display: "inline-block",
            // ml: isSmallScreen ? 1 : 2,
            width: "100%",
            textAlign: "center",
          }}
        >
          {activeStep?.label}
        </Typography>
        <activeStep.component />
        <Stack direction="row" justifyContent="space-between">
          <Stack width="50%" alignItems="center">
            <Button
              onClick={handleBackNavigation}
              disabled={activeStep?.stepNumber === 0}
              style={{
                border: "1px solid transparent",
                borderRadius: 1,
                color: "#fff",
                fontWeight: "bold",
                backgroundColor: "#004785",
                padding: 5
              }}
            >
              Previous
            </Button>
          </Stack>
          <Stack width="50%" alignItems="center">
            <Button
              onClick={handleNextNavigation}
              disabled={activeStep?.stepNumber === 5}
              style={{
                border: "1px solid transparent",
                borderRadius: 1,
                color: "#fff",
                fontWeight: "bold",
                backgroundColor: "#004785",
                padding: 5,
              }}
            >
              {activeStep?.stepNumber === 5 ? "Submit Application" : "Next"}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Registration;
