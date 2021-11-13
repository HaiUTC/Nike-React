import { useState } from "react"

interface ISelectSize{
    data : Array<number>,
    changeSize : (value: any) => void,
    haveSize : (value: any) => void,
    isSize : boolean
}

const SelectSize = ({data,changeSize,haveSize,isSize}: ISelectSize) => {
    const [size,setSize] = useState(0)
    const changeSizeVar = (value) =>{
        setSize(value)
        changeSize(value) 
        haveSize(true)
    }
    return (
        <div className='pt-6'>
            <p className='text-base pb-2'>Select Size</p>
            <div className={`${!isSize && 'border-2 border-red-500 '} grid grid-cols-12 gap-2`}>
                {data.map(item => (
                    <p key={item} className={`${item===size && 'border-gray-600 border-2 rounded-lg ' } col-span-4 border flex items-center justify-center p-2 text-lg cursor-pointer`} onClick={() => changeSizeVar(item)}>EU {item}</p>
                ))}               
            </div>
            <span className='text-base text-red-500 py-2'>{(!isSize)&& "Please select a size."}</span>
        </div>
    )
}
export default SelectSize