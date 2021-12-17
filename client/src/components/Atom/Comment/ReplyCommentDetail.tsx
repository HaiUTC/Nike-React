import { Avatar } from "@mui/material";
import React, { useState } from "react";
import time from '../../../utils/changeDateTime'
import ActionReplyComment from "./ActionReplyComment";
const ReplyCommentDetail = (props)=> {
  const [showActive,setShowActive] = useState(false)
  const [showActionDeatail,setShowActionDetail] = useState(false)
  const closeOption = () => setShowActive(false)
  const showOption = () => { 
    if(props.user.MyProfile){
      if(props.data.userId == props.user[0].MyProfile.id) setShowActive(true)
    }
  } 
  const showActionDetail = () => setShowActionDetail(!showActionDeatail)
  const deleteReplyComment = () => {
    props.socket.emit('UserDeleteComment',{
      id : props.data.id,
      send: 'replyComment',
      userId : props.user[0].MyProfile.id,
      productId : props.productId,
      commentId : props.commentId
  })
  }
  return (
    <div className="grid grid-cols-12 gap-4 relative" onMouseEnter={showOption}  onMouseLeave={closeOption}>
      <div className='flex items-center col-span-2 lg:col-span-1'>
        <Avatar alt={props.data.name} src={props.data.avatar}/>
      </div>
      <div className="col-span-10 lg:col-span-11 ">
        <div className="flex ">
          <p className="text-gray-500 text-sm m-0 py-2">{time.timeConverterComment(props.data.name,props.data.createdAt)}</p>
        </div>
        <div>
          <span className="text-sm">{props.data.content}</span>
        </div>
        <ActionReplyComment 
          like={props.data.like}
          dislike={props.data.dislike}
        />
      </div>
      {showActive ? <div className='absolute right-0 cursor-pointer p-2' onClick={showActionDetail}>
                <span className='text-3xl font-extrabold'>&#8942;</span>
                {showActionDeatail===true && <div className='text-sm px-4 py-2 border-2 border-black-500 shadow-md absolute right-0'>
                    <p>Edit</p>
                    <p onClick={deleteReplyComment}>Delete</p>
                </div>}
            
            </div> : null}
    </div>
  );
}

export default ReplyCommentDetail;
