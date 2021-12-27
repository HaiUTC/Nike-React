import dynamic from 'next/dynamic'
const LoadingElement = dynamic(() => import("../../Atom/Loading/LoadingElement"),{ ssr: false })
const ProductCart = dynamic(() => import("../../Atom/Cart/ProductCart"),{ ssr: false })

const ListCart = ({ removeItem, listProduct, loading }: IListCart) => {
    return (
        <div>
            <div className="py-4">
                <span className="md:text-2xl text-lg text-semibold ">Bag</span>
            </div>
            {loading && <LoadingElement />}
                <>
                    { listProduct.length !== undefined  ? (
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



interface IListCart{
    removeItem : any,
     listProduct : any, 
     loading : boolean
}