import React from 'react';


const Delivery = (props) =>{
    return (
        <div>   
            <p className='text-2xl pb-6'>Saved Delivery Addresses</p>
            <p className='text-base pb-6'>You currently don't have any saved delivery addresses. Add an address here to be prefilled for quicker checkout.</p>
            <div className='flex justify-end'>
            <button className="px-8 py-3 lgpy-2 rounded-full bg-black text-white w-full lg:w-auto">Add Address</button> 
            </div>
        </div>
    );
}

export default Delivery;