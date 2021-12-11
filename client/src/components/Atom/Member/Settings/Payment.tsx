import React from 'react';

const Payment = (props) =>{
    return (
        <div>   
            <p className='text-2xl pb-6'>Saved Payment Methods</p>
            <p className='text-base pb-6'>You currently don’t have any saved payment methods. Add a method here to be prefilled for quicker checkout.</p>
            <div className='flex justify-end'>
                <button className="px-8 py-3 lgpy-2 rounded-full bg-black text-white w-full lg:w-auto">Add Payment Method</button> 
            </div>
        </div>
    );
}

export default Payment;