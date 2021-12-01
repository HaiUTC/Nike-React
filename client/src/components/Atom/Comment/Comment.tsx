import React from 'react';
import MainComment from './MainComment';


const Comment = (props) => {
    return ( 
        <div>
            <MainComment 
                item={props.item}
                socket={props.socket}
                user={props.user}
                productId={props.productId}
            />
        </div>
    );
}

export default Comment;