import Delivery from '../../Molec/DetailProduct/Delivery'
import ProductInfo from '../../Molec/DetailProduct/ProductInfo'
import Review from '../../Molec/DetailProduct/Review'
const ProductInfomation = ({data,changeIndexPoster,productId}) => {
    return (
        <>
            <ProductInfo data={data} changeIndexPoster={changeIndexPoster} productId={productId}/>
            <Delivery />
            <Review />
        </>
    )
}
export default ProductInfomation