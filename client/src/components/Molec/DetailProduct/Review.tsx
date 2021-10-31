import { Accordion, AccordionDetails, AccordionSummary,Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRatings from "react-star-ratings";
import WriteComment from '../../Atom/WriteComment';
const Review = () => {
    return (
        <div className='w-full pt-3'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography component='span'>
                        <div className='text-xl grid grid-cols-12'>
                            <div className='col-span-8'>Reviews (0)</div>
                            <div className='col-span-4'>
                                <StarRatings
                                    starDimension="18px"
                                    starRatedColor="black"
                                    starHoverColor="black"
                                    starSpacing="2px"
                                    numberOfStars={5}
                                    rating={5}
                                />
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <WriteComment />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Review