import Image from 'next/image'
const DetailProduct = () => {
    return (
      <div className='px-1 pb-16 relative w-full'>
            <Image 
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png" 
                height="100%" 
                width="100%" 
                layout="responsive"
            />
          <div className="flex flex-col text-xs px-1 md:text-lg md:px-0 ">
            <span className="text-red-500">Just In</span>
            <span className="text-black">Nike Air</span>
            <span className="text-gray-500">Men's Shoes</span>
            <span className="text-gray-500">2 Colours</span>
            <span className="text-black py-2">$90</span>
          </div>
          <a href='/' className='absolute top-0 bottom-0 left-0 right-0 w-full h-auto'/>
      </div>
    )
}
export default DetailProduct