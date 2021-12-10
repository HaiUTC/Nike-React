import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, {Navigation} from 'swiper';
SwiperCore.use([Navigation]);
const ListImageProduct = ({data,indexPoster}) => {
    return (
        <>
            <div className='block lg:hidden'>
                <Swiper centeredSlides={true} navigation={true} className="mySwiper">
                    {data[indexPoster].url.map((item,index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="Detail Image Product"/>
                        </SwiperSlide>
                    ))}
                
                </Swiper>
            </div>
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-3 w-full">
                {data[indexPoster].url.map((item,index) => (
                    <div key={index} className="col-span-6">
                        <img src={item} alt="Detail Image Product"/>
                    </div>
                ))}
            </div>

        </>
    )
}
export default ListImageProduct