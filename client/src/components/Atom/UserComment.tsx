import StarRatings from "react-star-ratings";
const UserComment = () => {
    return (
        <div className='flex flex-col relative py-6' >
            <div><span className='text-base text-black-500 helve py-1'>Great shoes</span></div>
            <div className='flex justify-start items-center pb-2'>
                <div className='flex items-center'>
                    <StarRatings 
                        starDimension="15px"
                        starRatedColor="#000"
                        starHoverColor="black"
                        starSpacing="2px"
                        numberOfStars={5}
                        rating={5}
                    />
                </div>

                <div className='pl-6 text-base text-gray-500'><span>Alex_rod - Nov 28, 2021</span></div>
            </div>

            <div>
                <p className='text-base m-0'>These shoes are stylish and can go with almost anything. I recommend getting a pair!</p>
            </div>
            {/* {showActive===true && socket!==undefined && <div className='absolute right-0 cursor-pointer p-2' onClick={showActionDetail}>
                <span className='text-3xl font-extrabold'>&#8942;</span>
                {showActionDeatail===true && <div className='text-base px-4 py-2 border-2 border-black-500 shadow-md absolute right-0'>
                    <p>Edit</p>
                    <p onClick={deleteComment}>Delete</p>
                </div>}
            
            </div>} */}
            
        </div>
    )
}
export default UserComment