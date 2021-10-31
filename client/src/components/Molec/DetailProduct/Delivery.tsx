import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Delivery = () => {
    return (
        <div className='w-full'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography component='div'><p className='text-xl py-2'>Free Delivery and Returns</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component='div'>
                        <div className='py-4 text-base'>
                            <span>Your order of 5.000.000₫ or more gets free standard delivery.</span>
                            <ul className='list-disc pl-4 text-base py-8'>
                                <li className='pb-2'>Standard delivered 4-5 Business Days</li>
                                <li>Express delivered 2-4 Business Days</li>
                            </ul>
                            <span>Orders are processed and delivered Monday-Friday (excluding public holidays)</span>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Delivery