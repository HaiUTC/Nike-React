import { Step, StepButton, Stepper } from "@mui/material";

const steps = ['All', 'Confirmation','Delivery','Delivered','Cancelled'];
const StepperHeader = ({activeStep,handleStep}) =>{
    return (
        <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} >
              <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    );
}

export default StepperHeader;