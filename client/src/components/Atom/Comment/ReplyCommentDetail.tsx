import React, { useState } from "react";

const ReplyCommentDetail = ()=> {
  const [showActive,setShowActive] = useState(false)
  const [showActionDeatail,setShowActionDetail] = useState(false)

  const closeOption = () => setShowActive(false)
  const showActionDetail = () => setShowActionDetail(!showActionDeatail)
  const deleteReplyComment = () => {
   
}
  return (
    <div className="grid grid-cols-12 gap-4 relative"  onMouseLeave={closeOption}>
      <div className="col-span-1 flex items-start pt-6">
        <img alt="text" className='w-10 h-10 rounded-full'/>
      </div>
      <div className="col-span-11 ">
        <div className="flex ">
          <p className="text-black text-lg m-0 py-2">asfasd</p>
          <p className="text-gray-500 pl-10 text-sm m-0 py-2">
            11 minutes ago
          </p>
        </div>
        <div>
          <span className="text-sm">
            adasda
          </span>
        </div>
        {/* <ActionComment /> */}
      </div>
      {/* {showActive===true && socket!==undefined ? <div className='absolute right-0 cursor-pointer p-2' onClick={showActionDetail}>
                <span className='text-3xl font-extrabold'>&#8942;</span>
                {showActionDeatail===true && <div className='text-sm px-4 py-2 border-2 border-black-500 shadow-md absolute right-0'>
                    <p>Edit</p>
                    <p onClick={deleteReplyComment}>Delete</p>
                </div>}
            
            </div> : null} */}
    </div>
  );
}

export default ReplyCommentDetail;
