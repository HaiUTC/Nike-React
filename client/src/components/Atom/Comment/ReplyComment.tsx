import React, { useRef, useState } from 'react';
import ReplyCommentDetail from './ReplyCommentDetail';

const ReplyComment = () => {
    const textAreaRef = useRef(null)
    const [isEmpty,setIsEmpty] = useState(true)

    const asignValueText = () => {
        if(textAreaRef.current.value.trim().split('').length>=5) setIsEmpty(false)
    }
    const sendReplyComment = () => {
        // if(token){
        //     socket.emit('userCreateComment',{
        //         _productId : _productId,
        //         content : textAreaRef.current.value.trim(),
        //         send : 'replyComment',
        //         token : token,
        //         _commentId : item._id,
        //         _userId : item._userId 
        //     })
        //     textAreaRef.current.value = ''
        // }
        // else{
        
        // }
    }
    return (
        <div>
            <div className='grid grid-cols-12 gap-4 py-4'>
                <div className='col-span-1 flex items-start pt-2'>
                    <img className='h-10 w-10 rounded-full' alt='text'/>
                </div>
                <div className='col-span-11'>
                    <textarea className='w-full border-2 rounded-md text-sm px-4' placeholder='Write somthing in here...' ref={textAreaRef} onChange={asignValueText}/>
                    <div className='flex justify-end px-6 py-2'><button disabled={isEmpty} className='bg-black border-white text-white text-sm rounded-full px-8 py-2 outline-none disabled:cursor-not-allowed' onClick={sendReplyComment}>Send</button></div>
                </div>
            </div>
                <ReplyCommentDetail 
                    
                />
            
        </div>
    );
}

export default ReplyComment;