import { Avatar } from "@mui/material";
import { useState } from "react";
import UserComment from "../UserComment";
import ActionComment from "./ActionComment";
import ReplyComment from "./ReplyComment";

const MainComment = (props) => {
    const [showReply, setShowReply] = useState(false)
    const showReplyOptions = (value) => { setShowReply(value) }
    return (
        <div className='grid grid-cols-12 gap-4 py-10'>
                {/* Main Comment */}
            <div className='col-span-2 lg:col-span-1 pt-6'>
                <Avatar src={props.item.avatar} alt='text' />
            </div>
            <div className='col-span-10 lg:col-span-11 '>
                <UserComment 
                    item={props.item}
                    socket={props.socket}
                    user={props.user}
                    productId={props.productId}
                />
                <ActionComment 
                    typeAction={'main'} 
                    showReplyOptions={showReplyOptions} 
                    showReply={showReply} 
                    replyLength={props.item?.replys?.length || 0} 
                    like={props.item.like}
                    dislike={props.item.dislike}
                />
                {/* Reply Comment if user click btn reply ---TODO */}
               {showReply &&  
                <ReplyComment 
                    user={props.user}
                    socket={props.socket}
                    productId={props.productId}
                    item={props.item}
                />}
            </div>
            
        </div>
    );
}

export default MainComment;