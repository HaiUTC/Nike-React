import { MenuItem, Select } from "@mui/material"

const ProductFavorite = () => {
    return (
        <div className="grid grid-cols-12 gap-2 py-4">
        {/*image */}
        <div className='col-span-3'>
          <img
            src="https://images.nike.com/is/image/DotCom/DM6435_222_A_PREM?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
            alt=""
          />
        </div>
        {/*info */}
        <div className='col-span-6'>
          <div className='text-lg'>
          <span className='font-semibold'>Nike Air Force 1 GORE-TEX ®</span><br />
          <span className='text-gray-500'>Men's Shoes</span><br />
          </div>
          <div className='flex text-gray-500 text-lg'>
          <div>
          <span>Size</span>
            <Select defaultValue="42">
                <MenuItem value="42">42</MenuItem>
                <MenuItem value="43">43</MenuItem>
                <MenuItem value="44">44</MenuItem>
            </Select>
        </div>
          </div>
          <div className='flex text-lg pt-10'>
              <span className='py-2 px-4 border-gray-400 border-2 outline-none rounded-full bg-white text-black'>Add to Bag</span>
          </div>
        </div>
        {/*price */}
        <div className='col-span-3 text-lg text-gray-500'>499.99 $</div>
        {/* There are no items you favorite */}
      </div>
    )
}
export default ProductFavorite