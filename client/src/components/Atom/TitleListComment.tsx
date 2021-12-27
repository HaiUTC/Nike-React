import StarRatings from "react-star-ratings";
function TitleListComment({ lengthComment, reviewRating }: ITitleListComment) {
  return (
    <div>
      <div className="flex justify-center items-center flex-col py-8">
        <StarRatings
          starDimension="20px"
          starRatedColor="black"
          starHoverColor="black"
          starSpacing="3px"
          rating={reviewRating}
          numberOfStars={5}
        />
        <h2 className="py-4 tracking-tighter text-3xl font-semibold">
          {lengthComment} REVIEWS
        </h2>
      </div>
      <div className="w-full border-gray-300 border-b-2 border-t-2 font-semibold py-2">
        <p>Sort</p>
      </div>
    </div>
  );
}

export default TitleListComment;

interface ITitleListComment {
  lengthComment : number,
  reviewRating : number
}
