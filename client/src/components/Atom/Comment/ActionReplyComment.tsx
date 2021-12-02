const ActionReplyComment = ({like,dislike}) => {
  return (
    <div className="flex text-sm text-gray-500 py-4">
      <div className="flex pr-6 items-center cursor-pointer">
        <img className="h-4 w-5" src="/static/icons/like-normal.png" alt="text" />
        <p className="pl-2 m-0">{like}</p>
      </div>
      <div className="flex pr-6 items-center cursor-pointer">
        <img className="h-4 w-5" src="/static/icons/dislike-normal.png" alt="text" />
        <p className="pl-2 m-0">{dislike}</p>
      </div>
     
    </div>
  );
}

export default ActionReplyComment;