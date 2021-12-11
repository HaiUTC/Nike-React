import React from 'react';
import CheckBox from '../../Button/CheckBox';

const Privacy = (props) => {
    return (
        <div>
           <p className='text-2xl pb-6'>Privacy</p>
            <p className='text-base pb-2'>Nike Run Club & Nike Training Club</p>
            <p className='text-base pb-6'>Use my workout data to give me adaptive training plans, personalized product recommendations and special event invitations.</p>
            <div className="pb-10">
                <CheckBox title="Use Workout Data"/> 
            </div>
            <p className='text-base text-gray-500 pb-6'>Your privacy settings applies across all Nike apps. When you change your settings in one app, it will change in the others. For more information visit our Privacy Policy page.</p>
            <div className='flex justify-end'>
                <button className="px-8 py-3 lgpy-2 rounded-full bg-black text-white w-full lg:w-auto">Save</button> 
            </div> 
        </div>
    );
}

export default Privacy;