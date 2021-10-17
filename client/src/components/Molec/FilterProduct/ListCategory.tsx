const ListCategory = ({data}) => {
    return (
        <div className="w-full py-4 border-b border-gray-300">
            <ul className='m-0 b-0'>
                {data.map((item,index) => (
                    <li key={index}><a href="/" className='text-base text-black flex py-1'>{item}</a></li>
                ))}
            </ul>
        </div>
    )
}
export default ListCategory