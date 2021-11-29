import * as React from 'react';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import HeaderListCommnent from '../../Atom/HeaderListCommnent';
import TitleListComment from '../../Atom/TitleListComment';
import { TransitionProps } from '@mui/material/transitions';
import Comment from '../../Atom/Comment/Comment';


const Transition = React.forwardRef(function Transition(props: TransitionProps, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ListComment = ({handleCloseListComment}) => {
    return (
        <Dialog fullScreen open={true} TransitionComponent={Transition}>
            <div className='px-4'><HeaderListCommnent handleCloseListComment={handleCloseListComment}/></div>
            <div className="overflow-scroll h-full">
                <div className='px-60'>
                    <TitleListComment lengthComment={10} reviewRating={5} />
                    <Comment />
                </div>
            </div>
        </Dialog>
    );
}

export default ListComment;