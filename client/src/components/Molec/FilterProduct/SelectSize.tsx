const SelectSize = ({data}) => {
    return (
        <div className="w-full py-4 border-b border-gray-300">
				<div className="text-lg pb-4">Size</div>
				<div className="flex flex-wrap">
					{data.map((item,index) => (
						<div key={index} className="p-2 mr-3 mt-2 border border-gray-400 flex items-center justify-center rounded-md w-1/4 cursor-pointer">{item}</div>
					))}
				</div>
			</div>
    )
}
export default SelectSize