import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '@mui/material/colors';
const SelectFilter = ({data}) => {
    return (
        <div className='w-full'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{data.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography component='span'>
                    <FormGroup>
                        {data.labels.map(item => <FormControlLabel key={item} control={<Checkbox sx={{'&.Mui-checked': {color: grey[900],},}} />} label={item} />)}
                    </FormGroup>
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default SelectFilter