interface IProduct {
    url : string,
    name : string,
    productType :string,
    price : number,
    priceSale : number,
    link : string
}
const Product = ({url,name,productType,price,priceSale,link}: IProduct) => {
    return (
        <div className="relative px-2 pb-5">
          <div ><img style={{minHeight : "300px", minWidth : "300px"}} src={url} /></div>
          <div className="flex justify-between">
            <div className="flex flex-col py-4">
              <span className="text-base">{name}</span>
              <span className="text-base text-gray-500">{productType}</span>
            </div>
            <div className="text-base py-4 px-3 flex justify-center">
              <p className={(priceSale? "line-through" : "")}>${price}</p>
              {priceSale && <p className='pl-4'>${priceSale}</p>}
            </div>
          </div>
          <a href={link} className='absolute w-full h-full top-0'/>
      </div>
    )
}
export default Product