import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Scrollbar,Navigation  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Product from '../../Atom/Product';
import NextIcons from '../../Atom/NextPrevIcons';
SwiperCore.use([Scrollbar,Navigation])
interface IProduct {
    url : string,
    name : string,
    productType : string,
    price : number,
    priceSale ?: number,
    link : string
  }
interface IProductShowUp {
    data : Array<IProduct>,
    title : string
}
const ListProductShowUp = ({data,title}: IProductShowUp) => {
    
    const product = data.map((product,index) => (
        <SwiperSlide key={index}>
            <Product 
                url={product.url}
                name={product.name}
                productType={product.productType}
                price={product.price}
                priceSale={product.priceSale}
                link={product.link}    
            />
        </SwiperSlide>
    ))
    return (
        <div className="pt-12 ">
            <div className="text-2xl py-6 z-1 "><span>{title}</span></div>
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
                {product}
            </Swiper>
            <div id='directional_slide' className='flex absolute right-0' style={{zIndex: 999, top : "-60px"}}>
                <div className='prev pr-4 cursor-pointer'><NextIcons link="/static/icons/prev.svg"/></div>
                <div className='next cursor-pointer'><NextIcons link="/static/icons/next.svg"/></div>
            </div>
            </div>
        </div>
    )
}
export default ListProductShowUp