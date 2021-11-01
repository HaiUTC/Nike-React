import LoadingElement from "../../Atom/LoadingElement"
import ProductCart from "../../Atom/ProductCart"

const ListCart = ({ removeItem, listProduct, loading }) => {
    return (
        <div>
            <div className="py-4">
                <span className="md:text-2xl text-lg text-semibold ">Bag</span>
            </div>
            {loading && <LoadingElement />}
                <>
                    {(listProduct?.length !== 0 || listProduct === undefined) ? (
                        <div>
                            {listProduct?.map((item) => (
                                <ProductCart
                                    key={item.product._id + "" + item.haveSize}
                                    product={item.product}
                                    haveSize={item.haveSize}
                                    quantity={item.quantity}
                                    removeItem={removeItem}
                                />
                            ))}
                        </div>
                    ):(<span className="text-md md:text-lg h-20">Not have product in your bag.</span>)}
                </>
      
        </div>
    )
}
export default ListCart