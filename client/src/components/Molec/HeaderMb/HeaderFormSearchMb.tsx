import { toggleShowSearchBoxMb } from '../../../redux/Header/showSearchBox'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
const HeaderFormSearchMb = () => {
    const dispatch = useAppDispatch()
    const toggleSearch = () => {dispatch(toggleShowSearchBoxMb())}
	const isShowSearchBoxMb = useAppSelector((state) => state.showSearch.isShowSearchBoxMb)
    return (
        <div id="formSearchMb" className={"fixed top-0 left-0 right-0 z-10 bg-white h-full "+(isShowSearchBoxMb?null:'hidden')}>
				<div className="flex justify-between w-full md:px-10 px-4 py-4 grid grid-cols-12">
					<div className='md:col-span-11 col-span-10 w-full flex flex-col'>
					<div className="flex px-3 py-2 rounded-full bg-gray-light  m-auto items-center hover:bg-gray-300" style={{width : "100%"}}>
						<button className='border-0 bg-transparent flex items-center py-0.5' style={{outline : 'none'}}>
							<img src='/static/icons/search.svg' width="30px" height="30px"/>
						</button>
						<input className='border-0 bg-transparent w-full pl-4' type="text" placeholder="Search" style={{outline : 'none'}}></input>
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
					<div className="md:col-span-1 col-span-2 flex justify-center items-start pt-2 ml-4">
						<div className="bg-transparent p-2 rounded-full hover:bg-gray-300">
							<img src='/static/icons/exit.svg' height="15px" width="15px" onClick={toggleSearch}/>
						</div>	
					</div>
				</div>
				
			</div>
    )
}
export default HeaderFormSearchMb