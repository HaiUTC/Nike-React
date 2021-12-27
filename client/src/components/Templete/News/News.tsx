import NewsElement from "../../Atom/Button/NewsElement";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Scrollbar,Navigation  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NextIcons from '../../Atom/Button/NextPrevIcons';
SwiperCore.use([Scrollbar,Navigation])


const News = ({data}: IDataType) => {

    const news = data.map((newItem,index) => (
        <SwiperSlide key={index}>
            <NewsElement data={newItem}/>
        </SwiperSlide>
    ))

    return (
        <div className="pt-20 ">
            <div className='relative'>
            <Swiper
                navigation={{
                    prevEl : '.prev',
                    nextEl : '.next'
                }}
                breakpoints = {{
                    640 : {
                        slidesPerView: 3,
                        slidesPerGroup : 3
                    },  
                    
                    
                }}
                spaceBetween={0}
                slidesPerView={1}
                slidesPerGroup={1}
                scrollbar={{ draggable: true,hide: true }}
                >  
                {news}
            </Swiper>
            <div id='directional_slide' className='flex absolute right-0' style={{zIndex: 999, top : "-60px"}}>
                <div className='prev pr-4 cursor-pointer'><NextIcons link="/static/icons/prev.svg"/></div>
                <div className='next cursor-pointer'><NextIcons link="/static/icons/next.svg"/></div>
            </div>
            </div>
        </div>
    );
}

export default News;

interface DataNews {
    url : string,
    type : string,
    title : string,
    content : string
}
interface IDataType {
    data : [DataNews]
}