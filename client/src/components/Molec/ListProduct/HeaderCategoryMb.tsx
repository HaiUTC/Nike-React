import ToggleFilterProduct from "../../Atom/Button/ToogleFilterProduct"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from 'swiper';
SwiperCore.use([]);
interface IHeaderCategory {
    showSort ?: boolean,
    ShowSort : any,
    totalCount : number,
    categoryId?: number,
    isShowFilter : boolean,
    showFilter : any
}
enum HeaderTitle {
    "All Products"= undefined,
    "Men's Shoes" = 1,
    "Men's Clothings" = 2,
    "Men's Gears" = 3
}
const filterData = {
    name : ["Lifestyle","Jordan","Running","Basketball","Football","Baseball","Golf","Tennis","Athletics","Walking"],
}
const HeaderCategoryMb = ({showSort,ShowSort,totalCount,categoryId,isShowFilter,showFilter}:IHeaderCategory) => {
    return (
        <header className='py-6'>
            <div className='flex flex-col px-4'>
                <h1 className='text-2xl'>{HeaderTitle[categoryId]}</h1>
                <Swiper 
                    className="mySwiper w-full mt-6" 
                    spaceBetween={0}
                    slidesPerView={5}
                    slidesPerGroup={5}>
                    {filterData.name.map((item,index) => <SwiperSlide key={index}><a href='/'>{item}</a></SwiperSlide>)}
                </Swiper>
                {/* <nav className='flex justify-center items-center'>
                    <div className='max-w-min relative pt-6' style={{overflow : "scroll hidden"}}>
                        <ul className='flex' >
                            
                        </ul>
                        <div></div>
                    </div>
                </nav> */}
                <div className='flex justify-between py-4'>
                    <p className='text-lg text-gray-500'>{totalCount} Results</p>
                    <div className='border-2 rounded-full px-2 py-1'>
                        <ToggleFilterProduct showFilter={showFilter} isShowFilter={isShowFilter} title="Filters"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderCategoryMb