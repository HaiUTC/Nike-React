import Delivery from '../../Molec/DetailProduct/Delivery'
import ProductInfo from '../../Molec/DetailProduct/ProductInfo'
import Review from '../../Molec/DetailProduct/Review'
const ProductInfomation = (props) => {
    return (
        <>
            <ProductInfo data={props.data} changeIndexPoster={props.changeIndexPoster} productId={props.productId}/>
            <Delivery />
            <Review 
                dataComment={props.dataComment}
                lengthComment={props.lengthComment}
                reviewRating={props.reviewRating}
                productId={props.productId}
                socket={props.socket}
                user={props.user}
            />
        </>
    )
}
export default ProductInfomation