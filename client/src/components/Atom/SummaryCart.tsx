import ButtonCheckout from "./ButtonCheckout"

const SummaryCart = ({listProduct, price}) => {
    return (
        <div>
          <div className=" text-lg md:text-2xl py-4"><span>Summary</span></div>
          <div className="text-base border-b-2 py-3">
            <div className="grid grid-cols-12 gap-6">
              <div className='col-span-9 py-2'>Subtotal</div>
              <div className='col-span-3 flex justify-end lg:justify-start items-center'><p>{price || 0} $</p></div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className='col-span-9 py-2'>Estimated Delivery & Handling</div>
              <div className='col-span-3 flex justify-end lg:justify-start items-center'><p>29 $</p></div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 text-base border-b-2 py-3">
            <div className='col-span-9'>Total</div>
            <div className='col-span-3 flex justify-end lg:justify-start items-center'><p>{price+29 || 0} $</p></div>
          </div>
          <div className={"pt-8" + (listProduct?.length >0  ? 'block' : "hidden" )} >
            <ButtonCheckout />
          </div>
    </div>
    )
}
export default SummaryCart