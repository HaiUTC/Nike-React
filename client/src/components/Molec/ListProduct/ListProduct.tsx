import InfiniteScroll from "react-infinite-scroll-component";
import DetailProduct from "../../Atom/Product/DetailProduct"
import LoadingElement from "../../Atom/Loading/LoadingElement";

const ListProduct = ({products,hasMore,fetchMore}: IListProduct) => {
    const fetchAPIProduct = () => {fetchMore()};
    return (
        <div className='w-full'>
          <InfiniteScroll
            dataLength={products.length}
            next={fetchAPIProduct}
            hasMore={hasMore}
            loader={<LoadingElement />}
            className="flex flex-wrap"
          >
            {products.map((item,index) => (
              <div key={index} className='w-1/2 md:w-1/3'><DetailProduct key={item._id} data={item}/></div>
            ))}
          </InfiniteScroll>
          
        </div>
    )
}
export default ListProduct

interface IListProduct{
  hasMore : boolean,
  fetchMore : () => void,
  products : any
}