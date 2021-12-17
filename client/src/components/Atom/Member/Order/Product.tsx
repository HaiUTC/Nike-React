import Image from 'next/image'

const Product = ({product,haveSize,quantity,monney,color}) => {
    return (
        <div className="flex px-16 pt-4">
          {/*image */}
          <div className="px-8">
            <Image src={product.picture.url} height="150px" width="150px"/>
          </div>
          {/*info */}
          <div className=" mx-2 md:mx-0">
            <div>
              <p className='text-lg'>{product.name}</p>
              <p className="text-gray-500 text-base py-1">Color : {color}</p>
              <p className="text-gray-500 text-base py-1">Price : ${product.price}</p>
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
          
        </div>
    );
}

export default Product;