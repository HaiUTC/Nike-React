import StarRatings from "react-star-ratings";
import changeDateTime from '../../utils/changeDateTime'
const UserComment = ({item}) => {
    return (
        <div className='flex flex-col relative' >
            <div><span className='text-base text-black-500 helve py-1'>{item.title}</span></div>
            <div className='flex justify-start items-center pb-2'>
                <div className='flex items-center'>
                    <StarRatings 
                        starDimension="15px"
                        starRatedColor="#000"
                        starHoverColor="black"
                        starSpacing="2px"
                        numberOfStars={5}
                        rating={item.star}
                    />
                </div>

                <div className='pl-6 text-base text-gray-500'><span>{changeDateTime(item.user.name,item.createdAt)}</span></div>
            </div>

            <div>
                <p className='text-base m-0'>{item.content}</p>
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