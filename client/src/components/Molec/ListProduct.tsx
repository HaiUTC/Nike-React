import InfiniteScroll from "react-infinite-scroll-component";
import DetailProduct from "../Atom/DetailProduct"
import LoadingElement from "../Atom/LoadingElement";

const ListProduct = ({products,hasMore,fetchMore}) => {
    const fetchAPIProduct = () => {
      fetchMore()
      };
    return (
        <div>
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