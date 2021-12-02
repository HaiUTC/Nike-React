import { Avatar, fabClasses } from '@mui/material';
import React, { useRef, useState } from 'react';
import ReplyCommentDetail from './ReplyCommentDetail';

const ReplyComment = (props) => {
    const textAreaRef = useRef(null)
    const [isEmpty,setIsEmpty] = useState(false)
    const enterTA = () => { setIsEmpty(false) }
    const sendReplyComment = () => {
        if(textAreaRef.current.value.trim().split('').length<=5) setIsEmpty(true)
        else{
            props.socket.emit('userCreateComment',{
                productId : props.productId,
                content : textAreaRef.current.value.trim(),
                send : 'replyComment',
                commentId : props.item.id,
                userId : props.user[0].MyProfile.id,
                name : props.user[0].MyProfile.name,
                avatar : props.user[0].MyProfile.avatar
            })
            textAreaRef.current.value = ''
        }
    }
    return (
        <div>
            <div className='grid grid-cols-12 gap-4 py-4'>
                <Avatar alt={props.user[0].MyProfile.name} src={props.user[0].MyProfile.avatar} />
                <div className='col-span-11'>
                    <textarea rows={4} className={'w-full border-2 rounded-md text-sm px-4'+ (isEmpty ? ' border-2 border-red-500' : null) } placeholder='Write somthing in here...' ref={textAreaRef} onFocus={enterTA}/>
                    <div className='flex justify-end px-6 py-2'><button className='bg-black border-white text-white text-sm rounded-full px-8 py-2 outline-none disabled:cursor-not-allowed' onClick={sendReplyComment}>Send</button></div>
                </div>
            </div>
            {props.item.replys.map(item => <ReplyCommentDetail key={item.createdAt} data={item} socket={props.socket} user={props.user}/> )}  
        </div>
    );
}

export default ReplyComment;