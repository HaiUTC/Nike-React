import Image from "next/image"
import { toggleShowSearchBoxMb } from "../../../redux/Header/showSearchBox"
import { useAppDispatch } from "../../../redux/hook"
import Cart from "../../Atom/Header/Cart"
import HeaderLogo from "../../Molec/Header/HeaderLogo"
import BarAction from "../../Organ/HeaderMb/BarAction"
const HeaderMb = () => {
    const dispatch = useAppDispatch()
    const showSearch = () => {
        dispatch(toggleShowSearchBoxMb())   
    }
    return (
        <div id="headerMb" className='w-full hidden flex justify-between px-1 md:px-8 py-0.5'>
            <HeaderLogo />
            <div className='flex items-center'>
                <Cart />
                <div className=' flex items-center p-2 rounded-full cursor-pointer hover:bg-gray-300' onClick={showSearch}>
                    <Image src='/static/icons/search.svg' height="24px" width="24px" />
                </div>
                <BarAction />    
            </div>
            
        </div>
    )
}
export default HeaderMb