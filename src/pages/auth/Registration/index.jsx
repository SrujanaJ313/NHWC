import React, { useState } from "react";
import CustomerInformation from "./customerInformation";
import PersonalInformation from "./personalInformation";
import { Button, Stack } from "@mui/material";

const STEPS = [
  {
    active: true,
    stepNumber: 0,
    // completionStatus: "N",
    bgColor: "#183084",
    color: "white",
    component: CustomerInformation,
  },
  {
    // label: "Fact Finding",
    active: false,
    stepNumber: 1,
    // completionStatus: "N",
    bgColor: "white",
    color: "black",
    component: PersonalInformation,
  },
  // {
  //   label: "Review Charging",
  //   active: false,
  //   stepNumber: 2,
  //   completionStatus: "N",
  //   bgColor: "white",
  //   color: "black",
  //   component: ReviewCharging,
  // },
  // {
  //   label: "Record Decision",
  //   active: false,
  //   stepNumber: 3,
  //   completionStatus: "N",
  //   bgColor: "white",
  //   color: "black",
  //   component: RecordDecision,
  // },
  // {
  //   label: "End Date",
  //   active: false,
  //   stepNumber: 4,
  //   completionStatus: "N",
  //   bgColor: "white",
  //   color: "black",
  //   component: EndDate,
  // },
];

function Registration() {
  const [steps, setSteps] = useState(STEPS);
  const [activeStep, setActiveStep] = useState(STEPS[0]);

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
          bgColor: "white",
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
    <>
      <activeStep.component />
      <Stack direction="row" justifyContent="space-between">
        <Stack width="50%" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleBackNavigation}
            disabled={activeStep?.stepNumber === 0}
          >
            Previous
          </Button>
        </Stack>
        <Stack width="50%" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextNavigation}
            disabled={activeStep?.stepNumber === 1}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default Registration;
