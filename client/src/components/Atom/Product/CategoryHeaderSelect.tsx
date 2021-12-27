
interface IItem {
    name : string,
    link : string
}
interface IHeader {
    data : Array<IItem>,
    title : string
}
const CategoryHeaderSelect = ({data,title}: IHeader) => {
    const body = data.map((item,index)=> 
        <li key={index}>
            <a href={item.link} className='flex pr-8 text-base md:text-lg text-gray-500 hover:text-black' >{item.name}</a>     
        </li>
    )
    return (
        <div>
            <nav className='flex flex-col px-2 md:flex-row py-6'>
                <h1 className='text-2xl'>{title}</h1>
                <div className='flex mt-2 w-full whitespace-nowrap overflow-y-hidden md:mt-0 md:justify-center '>
                    <ul className='flex justify-center '>
                        {body}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default CategoryHeaderSelect