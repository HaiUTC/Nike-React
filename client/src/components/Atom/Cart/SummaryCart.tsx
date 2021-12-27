import { useState } from "react"
import { CheckOutInput, ProductCheckOut, useCheckOutMutation } from "../../../generated/graphql"
import Success from "../../Templete/Modal/Success"
import ButtonCheckout from "../Button/ButtonCheckout"

const SummaryCart = ({listProduct, price}) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [checkout] = useCheckOutMutation()
  const handleCheckOut = async () => {
    let listPro : ProductCheckOut[] = []
    listProduct.map(pro => {
      listPro.push({
        productId : pro.product.id,
        color : pro.color,
        size : pro.size,
        quantity : pro.quantity
      })
    })
    const checkOutProduct : CheckOutInput = {
      product : listPro,
      total : price+29
    }
    const response = await checkout({
      variables : {
        checkOutInput : checkOutProduct
      }
    })
    if(response.data.CheckOut.success){
      setShowSuccess(true)
      setIsSuccess(false)
    }
    else {
      setShowSuccess(true)
    }
  }
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
            <div className="grid grid-cols-12 gap-6">
              <div className='col-span-9 py-2'>Estimated Tax</div>
              <div className='col-span-3 flex justify-end lg:justify-start items-center'><p>___</p></div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 text-base border-b-2 py-3">
            <div className='col-span-9'>Total</div>
            <div className='col-span-3 flex justify-end lg:justify-start items-center'><p>{price+29 || 0} $</p></div>
          </div>
          <div className={"mt-8 " + (listProduct?.length >0  ? 'block' : "hidden" )} >
            <ButtonCheckout handleCheckOut={handleCheckOut}/>
          </div>
          {showSuccess && 
            <Success 
              image="/static/image/success.png"
              isBtn={true}
              text="Checkout successfully"
              handleClose={null}
              textBtn="Go back to Cart"
              link="/cart"
            />}
    </div>
    )
}
export default SummaryCart