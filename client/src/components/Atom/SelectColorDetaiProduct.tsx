import { useState } from "react"

const SelectColorDetailProduct = ({data,changeIndexPoster,setSelected,selected,setIndex}) => {
    
    const chooseColor = (index) => {
        setSelected(index)
        changeIndexPoster(index)
        setIndex(index)
    }
    return (
        <div className='flex py-3'>
            {data.map((item,index) => <div key={index} onClick={()=>chooseColor(index)} className={selected===index ?"border border-black rounded-md mx-2 p-0.5" : "mx-1 p-0.5"} style={{width:"69px", height:"69px"}}><img className='w-full h-full' src={item.url[0]} alt="Select Detail Color"/></div>)}
            <div style={{width:"69px", height:"69px"}}><img className='w-full h-full' src="/static/image/DYO.png" alt="Select Detail Color"/></div>
        </div>
    )
}
export default SelectColorDetailProduct