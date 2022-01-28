import { useState } from "react";
import LoadingElement from "../Loading/LoadingElement";

const MyLocation = ({ address, onSubmitCheckOut, loading, location, activeThisLocation }) => {

  const AllAddress = () => {
    return (
          <>
            {address.map((item,index) => (
              <div key={index} className="w-full items-center border-2 rounded-md my-4 text-sm " onClick={() => activeThisLocation(item)}>
                <p className="py-2 px-2">Address : <span className="text-gray-500 pl-2">{item.detail}, {item.commune}, {item.distric}, {item.province}</span></p>
                <p className="py-2 px-2">Phone N : <span className="text-gray-500 pl-2">{item.phoneNumber}</span> </p>
              </div>
              ))}
          </>
    )
  }

  const AddressChoose = ({item}) => {
    return (
        <div className="w-full items-center border-2 rounded-md my-4 text-sm border-black">
          <p className="py-2 px-2">Address : <span className="text-gray-500 pl-2">{item.detail}, {item.commune}, {item.distric}, {item.province}</span></p>
          <p className="py-2 px-2">Phone N : <span className="text-gray-500 pl-2">{item.phoneNumber}</span> </p>
        </div>
    )
  }
  return (
    <>
    {loading && <LoadingElement />}
      <div className="pt-4 pb-2 flex justify-between items-center">
        <span className="text-xl underline">Choose one location : </span>
        <span className="text-sm underline cursor-pointer" onClick={() => activeThisLocation(null)}>Choose another location:</span>
      </div>
      
      <div className="py-4">
        {location.id!==null ? <AddressChoose item={location.address} /> : <AllAddress />}
        <button
          disabled={location.id === null}
          className="disable text-lg text-white py-4 bg-black w-full rounded-full disabled:opacity-80 outline-white"
          onClick={() => onSubmitCheckOut(location.id)}
        >
          ORDER
        </button>
      </div>
    </>
  );
};
export default MyLocation;
