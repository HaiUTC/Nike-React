

const Product = ({product,haveSize,quantity,monney,color}) => {
    return (
        <div className="grid grid-cols-12 md:gap-6 py-4">
          {/*image */}
          <div className="col-span-3">
            <img src="" alt="" />
          </div>
          {/*info */}
          <div className="col-span-6 mx-2 md:mx-0">
            <div>
              <p className='text-lg'>sdf</p>
              <p className="text-gray-500 text-base py-1">sdf</p>
              <p className="text-gray-500 text-base py-1">{color}</p>
            </div>
            <div className="flex text-gray-500 text-base py-2">
              <div>
                <span className='pr-2'>Size : {haveSize}</span>
              </div>
              <div className='px-4'>
                <span className='pr-2'>Quantity : {quantity}</span>
              </div>
            </div>
          </div>
          {/*price */}
          <div className="col-span-3 text-base flex justify-end mx-4 lg:mx-0 lg:justify-start">{monney} $</div>
        </div>
    );
}

export default Product;