import { Accordion, AccordionDetails, AccordionSummary,Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRatings from "react-star-ratings";
import WriteComment from '../../Atom/WriteComment';
import UserComment from '../../Atom/UserComment';
import {showListComment} from '../../../redux/Comment/showListComment';
import { useAppDispatch } from '../../../redux/hook';
import { isEmpty } from 'lodash';
const Review = (props) => {
    const dispatch = useAppDispatch()
    const showListCommentClick = () => { dispatch(showListComment())}
    return (
        <div className='w-full pt-3'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography component='span'>
                        <div className='text-xl grid grid-cols-12'>
                            <div className='col-span-8'>Reviews ({props.lengthComment || 0})</div>
                            <div className='col-span-4'>
                                <StarRatings
                                    starDimension="18px"
                                    starRatedColor="black"
                                    starHoverColor="black"
                                    starSpacing="2px"
                                    numberOfStars={5}
                                    rating={props.reviewRating || 0}
                                />
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <WriteComment 
                        productId={props.productId}
                        socket={props.socket}
                        user={props.user}
                    />
                    {!isEmpty(props.dataComment) && (
                        <>
                            {props.dataComment.slice(0,3).map(item => (
                                <div className='py-6' key={item.createdAt}>
                                    <UserComment 
                                        item={item}
                                        productId={props.productId}
                                        socket={props.socket}
                                        user={props.user}
                                    />
                                </div>
                            ))}
                            <div className='pb-20 pt-4'>
                                <button className="cursor-pointer py-1 border-b-2 border-black text-base" onClick={showListCommentClick}>More Reviews</button>
                            </div>
                        </>
                    )}
                </AccordionDetails>
            </Accordion>
            
            
        </div>
    )
}
export default Review