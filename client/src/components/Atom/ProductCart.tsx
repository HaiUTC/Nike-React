import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const ProductCart = ({product,haveSize,quantity,removeItem}) => {
    const handleChangeSize = (event) => {
       // setAge(event.target.value);
    }

    const handleChangeQuantity = (event) => {
        // setAge(event.target.value);
    }

    let options= []
    for(let i=1;i<=10;i++){options.push( <MenuItem key={i} value={i}>{i}</MenuItem>)}
    return (
        <div className="grid grid-cols-12 md:gap-6 py-4">
          {/*image */}
          <div className="col-span-3">
            <img src={product.poster[0].url} alt={product.name} />
          </div>
          {/*info */}
          <div className="col-span-6 mx-2 md:mx-0">
            <div className="text-xs md:text-lg">
              <span className="font-semibold">{product.name}</span>
              <br />
              <span className="text-gray-500">{product.productType}</span>
              <br />
              <span className="text-gray-500">{product.color.join("/")}</span>
              <br />
            </div>
            <div className="flex text-gray-500 text-xs md:text-lg">
              <div>
                <span>Size</span>
                <Select defaultValue={haveSize} onChange={handleChangeSize}>
                  {product.size.map((item, index) => (
                     <MenuItem key={index} value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </div>
              <div>
                <span>Quantity</span>
                <Select defaultValue={quantity} onChange={handleChangeQuantity}>
                  {options}
                </Select>
              </div>
            </div>
            <div className="flex text-gray-500 text-xs md:text-lg underline py-4">
              <div className="pr-3 cursor-pointer">
                <span>Move to Favorites</span>
              </div>
              <div className="cursor-pointer" onClick={removeItem}>
                <span>Remove</span>
              </div>
            </div>
          </div>
          {/*price */}
          <div className="col-span-3 text-xs md:text-lg text-gray-500 mx-4 md:mx-0">{(product.price*quantity).toFixed(2)} $</div>
        </div>
    )
}
export default ProductCart