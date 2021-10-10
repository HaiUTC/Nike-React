import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);
const HeaderAnnounce = () =>{
    return (
        <Swiper centeredSlides={true} autoplay={{"delay": 5000,"disableOnInteraction": false}} className="mySwiper bg-gray-100">
            <SwiperSlide>
                    <div className='flex justify-center items-center flex-col py-1'>
                        <p className='text-black'>FREE DELIVERY</p>
                        <p className='text-xs py-1 text-gray-600'>Applies to orders at 5.000.000 or more. <a href='/' className='underline'>Get details</a></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center flex-col py-1'>
                        <p className='text-black'>SAVE UP TO 40%</p>
                        <p className='text-xs py-1 text-gray-600 underline'>Shop All Our New Markdowns</p>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center flex-col py-1'>
                        <p className='text-black'>HELLO NIKE APP</p>
                        <p className='text-xs py-1 text-gray-600'>Download the app to access everything Nike. <a href='/' className='underline'>Get Your Great</a></p>
                    </div>               
                </SwiperSlide>
        </Swiper>
    )
}
export default HeaderAnnounce