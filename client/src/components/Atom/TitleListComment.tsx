import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import StarRatings from "react-star-ratings";
function TitleListComment({lengthComment,reviewRating}) {
  const handleChange = (e) => {

  }
    return (
        <div>
            <div className="flex justify-center items-center flex-col py-8">
              <StarRatings
                starDimension="20px"
                starRatedColor="black"
                starHoverColor="black"
                starSpacing="3px"
                rating={reviewRating || 0}
                numberOfStars={5}
              />
              <h2 className="py-4 tracking-tighter text-2xl font-semibold">
                {lengthComment} REVIEWS
              </h2>
            </div>
            <div className='w-full border-gray-300 border-b-2 border-t-2 font-semibold py-2'>
              <FormControl className='w-48 '>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="newest"
                  label="Age"
                  onChange={handleChange}
                  className='font-semibold'
                >
                  <MenuItem value="newest">Sort By : Newest</MenuItem>
                  <MenuItem value="mostHelpful">Sort By : Most Helpful</MenuItem>
                  <MenuItem value="highestToLowest">Sort By : Highest To Lowest</MenuItem>
                  <MenuItem value="lowestToHighest">Sort By : Lowest To Highest</MenuItem>
                </Select>
              </FormControl>
            </div>
        </div>
    );
}

export default TitleListComment;