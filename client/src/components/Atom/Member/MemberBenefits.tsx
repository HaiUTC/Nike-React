import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Scrollbar,Navigation  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NextIcons from '../../Atom/Button/NextPrevIcons';
import MemberBenefitsItem from './MemberBenefitsItem';
SwiperCore.use([Scrollbar,Navigation])


const MemberBenefits = ({data,title}) =>{

    const benefits = data.map((newItem,index) => (
        <SwiperSlide key={index}>
            <MemberBenefitsItem data={newItem}/>
        </SwiperSlide>
    ))
    return (
        <div className="pt-20 ">
            <div className="py-6 text-2xl"><span>{title}</span></div>
            <div className='relative'>
            <Swiper
                navigation={{
                    prevEl : '.prev',
                    nextEl : '.next'
                }}
                breakpoints = {{
                    640 : {
                        slidesPerView: 4,
                        slidesPerGroup : 4
                    },  
                    
                    
                }}
                spaceBetween={0}
                slidesPerView={1}
                slidesPerGroup={1}
                scrollbar={{ draggable: true,hide: true }}
                >  
                {benefits}
            </Swiper>
            <div id='directional_slide' className='flex absolute right-0' style={{zIndex: 999, top : "-60px"}}>
                <div className='prev pr-4 cursor-pointer'><NextIcons link="/static/icons/prev.svg"/></div>
                <div className='next cursor-pointer'><NextIcons link="/static/icons/next.svg"/></div>
            </div>
            </div>
        </div>
    );
}

export default MemberBenefits;