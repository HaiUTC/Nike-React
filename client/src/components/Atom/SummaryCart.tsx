const SummaryCart = ({ price, listProduct }) => {
    return (
        <div>
      <div className=" text-lg md:text-2xl py-4">
        <span>Summary</span>
      </div>
      <div className="text-xs md:text-lg border-b-2 py-3">
        <div className="grid grid-cols-12 gap-6">
          <div className='col-span-8'>Subtotal</div>
          <div className='col-span-4 pr-10'>{price} $</div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className='col-span-8'>Estimated Delivery & Handling</div>
          <div className='col-span-4 pr-10'>0 $</div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 text-xs md:text-lg border-b-2 py-3">
        <div className='col-span-8'>Total</div>
        <div className='col-span-4 pr-10'>{price} $</div>
      </div>
      {/* {price !== 0 ? (
        <Link
          to={{
            pathname: `/checkout`,
            state: { listProduct, price},
          }}
          className="text-md md:text-lg text-white py-3 px-6 bg-black rounded-full flex items-center justify-center mt-4"
        >
          Member Checkout
        </Link>
      ) : (
        <Link
          to="/checkout"
          onClick={(e) => {
            e.preventDefault();
            message.error("Please purchase some product.");
          }}
          className="text-lg text-white py-3 px-6 bg-black rounded-full flex items-center justify-center mt-4 opacity-80"
        >
          Member Checkout
        </Link>
      )} */}
    </div>
    )
}
export default SummaryCart