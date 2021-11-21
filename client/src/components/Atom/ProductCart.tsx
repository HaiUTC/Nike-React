import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const ProductCart = ({product,haveSize,quantity,removeItem,monney,color}) => {
    const handleChangeSize = (event) => {
       // setAge(event.target.value);
    }

    const handleChangeQuantity = (event) => {
        // setAge(event.target.value);
    }

    let options= []
    for(let i=1;i<=10;i++){options.push( <MenuItem key={i} value={i}><pre>{i}  </pre></MenuItem>)}
    return (
        <div className="grid grid-cols-12 md:gap-6 py-4">
          {/*image */}
          <div className="col-span-3">
            <img src={product.picture.url} alt={product.name} />
          </div>
          {/*info */}
          <div className="col-span-6 mx-2 md:mx-0">
            <div>
              <p className='text-lg'>{product.name}</p>
              <p className="text-gray-500 text-base py-1">{product.title}</p>
              <p className="text-gray-500 text-base py-1">{color}</p>
            </div>
            <div className="flex text-gray-500 text-base py-2">
              <div>
                <span className='pr-2'>Size</span>
                <Select defaultValue={haveSize} onChange={handleChangeSize}>
                  {product.size.map((item, index) => (
                     <MenuItem key={index} value={item}><pre className='text-base'>{item}  </pre></MenuItem>
                  ))}
                </Select>
              </div>
              <div className='px-4'>
                <span className='pr-2'>Quantity</span>
                <Select defaultValue={quantity} onChange={handleChangeQuantity}>
                  {options}
                </Select>
              </div>
            </div>
            <div className="flex text-gray-500 text-base underline py-4">
              <div className="pr-3 cursor-pointer">
                <span>Move to Favorites</span>
              </div>
              <div className="cursor-pointer" onClick={() => removeItem(product.id)}>
                <span>Remove</span>
              </div>
            </div>
          </div>
          {/*price */}
          <div className="col-span-3 text-base flex justify-end mx-4 lg:mx-0 lg:justify-start">{monney} $</div>
        </div>
    )
}
export default ProductCart