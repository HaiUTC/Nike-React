

const ActionComment = ({showReplyOptions,showReply,replyLength,typeAction,socket,user,item,productId}) => {
    const showReplyDetail = () =>{showReplyOptions(!showReply)}
    const reactComment = (reactValue) => {
      socket.emit('UserReactComment',{
        userId : user[0].MyProfile.id,
        commentId : item.id,
        react : reactValue,
        productId
      })
    }
  return (
    <div className="flex text-sm text-gray-500 py-4">
      <div className="flex pr-6 items-center cursor-pointer" onClick={() => reactComment(1)}>
        <img className="h-4 w-5" src="/static/icons/like-normal.png" alt="text" />
        <p className="pl-2 m-0">{item.like}</p>
      </div>
      <div className="flex pr-6 items-center cursor-pointer" onClick={() => reactComment(-1)}>
        <img className="h-4 w-5" src="/static/icons/dislike-normal.png" alt="text" />
        <p className="pl-2 m-0">{item.dislike}</p>
      </div>
      {typeAction &&  <div className="flex cursor-pointer items-center" onClick={showReplyDetail}>
      <img className="h-5  w-5" src="/static/icons/comment.png" alt="comment" />
      <p className="pl-2 m-0">{replyLength}</p>
    </div>}
     
    </div>
  );
}

export default ActionComment;
