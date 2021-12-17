import time from "../../../../utils/changeDateTime";
import Product from "./Product";

const TabContent = ({ data }) => {
  return (
    <div className="px-16 pt-8">
      {data?.getOrder.all.map((order, index) => (
        <div key={index}>
          {order.items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center text-lg border-b-2 border-gray-300">
                <p>{time.timeConverterOrder(data.getOrder.all[0].createdAt)}</p>
              </div>
              <Product
                product={item.product}
                haveSize={item.size}
                quantity={item.quantity}
                monney="100"
                color="white"
              />
            </div>
          ))}
          <div className="flex justify-end ">
            <div className="text-center">
              <p className="py-3">Total : ${data.getOrder.all[0].total}</p>
              <button className="px-12 py-3 bg-black text-white rounded-full">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabContent;
