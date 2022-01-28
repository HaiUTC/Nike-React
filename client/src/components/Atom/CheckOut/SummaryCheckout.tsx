
const SummaryCheckout = ({listProduct, price}) => {

  return (
    <>
      <div>
        <span className="text-black text-2xl">Summary</span>
      </div> 
      {listProduct.map((item) => (
        <div
          key={item.product._id + "" + item.product.size}
          className="grid grid-cols-12 gap-6 py-4"
        >

          <div className="col-span-3">
            <img src={item.product.picture.url} alt={item.product.name} />
          </div>

          <div className="col-span-6">
            <div>
              <span className=" text-lg">{item.product.name}</span>
              <br />
              <span className="text-black text-sm">
                {item.product.title}
              </span>
              <br />
            </div>
            <div className="flex text-gray-500 text-sm ">
              <div>
                <span>Size : {item.size}</span>
              </div>
              <div className="pl-4">
                <span>Quantity : {item.quantity}</span>
              </div>
            </div>
          </div>

          <div className="col-span-3 text-lg text-black">
            {item.product.price} $
          </div>
        </div>
      ))}
      <div className="text-lg border-b-2 py-4 px-4 mr-10">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>{price || 0} $</div>
        </div>
        <div className="flex justify-between pt-3">
          <div>Estimated Delivery & Handling</div>
          <div>2.9 $</div>
        </div>
      </div>
      <div className="flex text-lg justify-between border-b-2 py-3 px-4 mr-10">
        <div>Total</div>
        <div>{+price + 2.9} $</div>
      </div>
    </>

  );
};
export default SummaryCheckout;
