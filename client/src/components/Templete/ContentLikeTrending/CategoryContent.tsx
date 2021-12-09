import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Scrollbar,Navigation  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SessionPartContent from "../../Atom/SessionPartContent"
import NextPrevIcons from '../../Atom/NextPrevIcons';
SwiperCore.use([Scrollbar,Navigation])
interface ISessionPartContent {
    url : string,
    name ?: string,
    type :string,
    link : string,
    height : string,
    darkMode : boolean
}
interface ICategoryContent {
    data : Array<ISessionPartContent>,
    title : string,
    isAbsolute ?: boolean
}

const CategoryContent = ({data,title,isAbsolute}: ICategoryContent) =>{
    return (
        <div>
            <div className="py-6 text-2xl"><span>{title}</span></div>
            {data.length<=3 ? (
                <div className="flex flex-col justify-around w-full md:flex-row">
                    {data.map((item) => <SessionPartContent key={item.url} {...item} isAbsolute={isAbsolute}/>)}
                </div>
            ) : (
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
                        {data.map((product,index) => (
                            <SwiperSlide key={index}>
                                <SessionPartContent key={index} {...product} isAbsolute={isAbsolute}/>
                            </SwiperSlide>))}
                    </Swiper>
                    <div id='directional_slide' className='flex absolute right-0' style={{zIndex: 999, top : "-60px"}}>
                        <div className='prev pr-4 cursor-pointer'><NextPrevIcons link="/static/icons/prev.svg"/></div>
                        <div className='next cursor-pointer'><NextPrevIcons link="/static/icons/next.svg"/></div>
                    </div>
                </div>
            )}  
            </div>
    )
}
export default CategoryContent