import HeaderLogo from "./HeaderLogo"
import { useAppDispatch, useAppSelector } from "../../../redux/hook"
import { toggleShowSearchBox } from "../../../redux/Header/showSearchBox"
import { useRouter } from "next/router"
import { useRef } from "react"

const HeaderFormSearch = () => {
	const router = useRouter()
	const inputRef = useRef(null)
	const dispatch = useAppDispatch()
    const toggleSearch = () => {dispatch(toggleShowSearchBox())}
	const isShowSearchBox = useAppSelector((state) => state.showSearch.isShowSearchBox)
	const searchEvent = async () => {
		toggleSearch()
		router.replace(`/s?q=${inputRef.current.value}`)
	}
    return (
        <div id='formSearch' className={"absolute top-0 left-0 right-0 z-10 bg-white "+(isShowSearchBox?null:'hidden')}>
				<div className="flex justify-between w-full px-10 py-4 grid grid-cols-12">
					<div className="pr-1/6 col-span-3"><HeaderLogo /></div>
					<div className='col-span-6 w-full flex flex-col'>
					<div className="flex px-3 py-2 rounded-full bg-gray-light  m-auto items-center hover:bg-gray-300" style={{width : "100%"}}>
						<button className='border-0 bg-transparent flex items-center py-0.5' style={{outline : 'none'}} onClick={searchEvent}>
							<img src='/static/icons/search.svg' width="30px" height="30px"/>
						</button>
						<input className='border-0 bg-transparent w-full pl-4' type="text" placeholder="Search" style={{outline : 'none'}} ref={inputRef} onKeyPress={(e) => e.key === 'Enter' && searchEvent()}></input>
					</div>
						<div className="left-0 py-10"> 
							<h2 className="text-2xl">Popular Search Term</h2>
							<ul className='pt-4'>
								<li><a href="/" className="py-1 text-gray-500 text-lg flex hover:text-black">Air Force 1</a></li>
								<li><a href="/" className="py-1 text-gray-500 text-lg flex hover:text-black">Jordan</a></li>
								<li><a href="/" className="py-1 text-gray-500 text-lg flex hover:text-black">Air Max</a></li>
								<li><a href="/" className="py-1 text-gray-500 text-lg flex hover:text-black">Blazer</a></li>
							</ul>
						</div>
					</div>
					<div className="col-span-3 flex justify-center items-start ml-16 pt-2  ">
						<div className="bg-transparent p-2 rounded-full hover:bg-gray-300">
							<img src='/static/icon	s/exit.svg' height="15px" width="15px" onClick={toggleSearch}/>
						</div>							
					</div>
				</div>
				
			</div>
    )
}
export default HeaderFormSearch