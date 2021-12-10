import React from 'react';
import DownLoadElement from './DownLoadElement';

const DownLoad = ({data,title}) =>{
    return (
        <>
            <div className="py-6 text-2xl"><span>{title}</span></div>
            <div className='lg:grid lg:grid-cols-12 lg:gap-1'>
                
                {data.map((item,index) => 
                    <div key={index} className='col-span-3'>
                        <DownLoadElement data={item}/>
                    </div>
                )}
            </div>
        </>
    );
}

export default DownLoad;