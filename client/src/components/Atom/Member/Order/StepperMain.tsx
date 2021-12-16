import Box from '@mui/material/Box';
import {useState} from 'react'
import StepperHeader from './StepperHeader'
import StepperContent from './StepperContent'


const StepperMain = () =>{

    const [activeStep, setActiveStep] = useState(0)
    const handleStep = (step) => () => { setActiveStep(step) }

    return (
        <Box sx={{ width: '100%' }} mt={6}>
            <StepperHeader activeStep={activeStep} handleStep={handleStep} />
            <div>
                <StepperContent activeStep={activeStep}/>
            </div>
        </Box>

    );
}

export default StepperMain;