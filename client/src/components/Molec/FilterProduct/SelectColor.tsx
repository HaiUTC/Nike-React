const SelectColor = ({data}) => {
    return (
        <div className="w-full py-4 border-b border-gray-300">
            <div className="text-lg pb-4">Color</div>
            <div className="flex flex-wrap">
                {data.map((item,index) => {
                    const colorClass = item.toLowerCase()
                    return (
                        <div key={index} className="flex flex-col items-center w-1/3 mb-1 cursor-pointer">
                            <span className={`w-8 h-8 bg-${colorClass}-500 rounded-full border-2`}></span>
                            <p>{item}</p>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}
export default SelectColor