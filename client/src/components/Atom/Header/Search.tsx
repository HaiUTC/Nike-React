import Image from 'next/image'
const Search = () => {
    return (
        <div className="flex px-3 py-2 rounded-full bg-gray-light  m-auto items-center" style={{width : '200px'}}>
            <button className='border-0 bg-transparent flex items-center py-0.5' style={{outline : 'none'}}>
                <Image src='/img/search.svg' width="30px" height="30px"/>
            </button>
            <input className='border-0 bg-gray-light w-full pl-4' type="text" placeholder="Search" style={{outline : 'none'}}></input>
        </div>
    );
}
export default Search