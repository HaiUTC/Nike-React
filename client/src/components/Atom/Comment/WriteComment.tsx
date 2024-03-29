import { useContext, useState } from "react";
import StarRatings from "react-star-ratings";
import { UserContext } from "../../../libs/UserContext";
import LoginModal from "../../Templete/Modal/LoginModal";
import ReviewModal from "../../Templete/Modal/ReviewModal";
const WriteComment = (props) => {
  const [showWriteComment, setShowWriteComment] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { isUser } = useContext(UserContext);
  const showWriteCmt = () => {
    if (isUser[0]) {
      setShowWriteComment(true);
      setShowLogin(false);
    } else {
      setShowWriteComment(false);
      setShowLogin(true);
    }
  };
  const handleClose = () => {
    setShowLogin(false);
  };
  const handleCloseReviewModal = () => {
    setShowWriteComment(false);
  };
  return (
    <div className="text-base py-4">
      <div className="flex items-center pb-2">
        <StarRatings
          starDimension="18px"
          starRatedColor="black"
          starHoverColor="black"
          starSpacing="2px"
          numberOfStars={5}
          rating={5}
        />
        <div className="pl-3 text-base">0 Stars</div>
      </div>
      <div>
        <p>Have your say. Be the first to review the .</p>
        <button
          className="cursor-pointer py-1 border-b-2 border-black"
          onClick={showWriteCmt}
        >
          Write a Review
        </button>
      </div>
      {showWriteComment && (
        <ReviewModal 
            handleCloseModal={handleCloseReviewModal} 
            socket={props.socket}
            productId={props.productId}
            user={props.user}
        />
      )}
      {showLogin && <LoginModal handleClose={handleClose} />}
    </div>
  );
};
export default WriteComment;
