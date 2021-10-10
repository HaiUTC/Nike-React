import Image from 'next/image'
import { toggleShowSearchBox } from '../../../redux/Header/showSearchBox';
import { useAppDispatch } from '../../../redux/hook';
const Search = () => {
    const dispatch = useAppDispatch()
    const showSearch = () => {
        dispatch(toggleShowSearchBox())   
    }
    return (
        <div className="flex px-3 py-2 rounded-full bg-gray-light  m-auto items-center hover:bg-gray-300" style={{width : "200px"}}>
            <button className='border-0 bg-transparent flex items-center py-0.5' style={{outline : 'none'}}>
                <Image src='/static/icons/search.svg' width="30px" height="30px"/>
            </button>
            <input className='border-0 bg-transparent w-full pl-4' type="text" placeholder="Search" style={{outline : 'none'}} onClick={showSearch}></input>
        </div>
    );
}
export default Search