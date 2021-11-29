import { useState } from "react";
import UserComment from "../UserComment";
import ActionComment from "./ActionComment";
import ReplyComment from "./ReplyComment";


const MainComment = () => {
    const [showReply, setShowReply] = useState(false)
    const showReplyOptions = (value) => {
        setShowReply(value)
    }
    return (
        <div className='grid grid-cols-12 gap-4 py-10'>
                {/* Main Comment */}
            <div className='col-span-1 pt-6'>
                <img className='h-10 w-10 rounded-full' alt='text'/>
            </div>
            <div className='col-span-11 '>
                <UserComment 
                    
                />
                <ActionComment typeAction={'main'} showReplyOptions={showReplyOptions} showReply={showReply} replyLength={0}/>
                {/* Reply Comment if user click btn reply ---TODO */}
               {showReply &&  <ReplyComment 
                   
                />}
            </div>
            
        </div>
    );
}

export default MainComment;