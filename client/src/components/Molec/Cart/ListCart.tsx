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
                                    key={item.product.id + "" + item.size}
                                    product={item.product}
                                    color={item.color}
                                    haveSize={item.size}
                                    quantity={item.quantity}
                                    monney={item.monney}
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