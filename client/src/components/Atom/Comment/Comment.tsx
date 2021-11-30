import React from 'react';
import MainComment from './MainComment';


const Comment = (props) => {
    return (
            
        <div>
            <MainComment item={props.item}/>
        </div>
    );
}

export default Comment;