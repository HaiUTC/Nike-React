import Delivery from '../../Molec/DetailProduct/Delivery'
import ProductInfo from '../../Molec/DetailProduct/ProductInfo'
import Review from '../../Molec/DetailProduct/Review'
const ProductInfomation = ({data,changeIndexPoster}) => {
    return (
        <>
            <ProductInfo data={data} changeIndexPoster={changeIndexPoster}/>
            <Delivery />
            <Review />
        </>
    )
}
export default ProductInfomation