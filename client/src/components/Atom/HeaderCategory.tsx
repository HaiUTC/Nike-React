import Image from 'next/image'

interface IHeaderCategory {
    showSort : boolean,
    ShowSort : any,
    totalCount : number,
    categoryId?: number
}
enum HeaderTitle {
    "All Products"= undefined,
    "Men's Shoes" = 1,
    "Men's Clothings" = 2,
    "Men's Gears" = 3
}
const HeaderCategory = ({showSort,ShowSort,totalCount,categoryId}:IHeaderCategory) => {
    return (
        <header className='py-6'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl'>{HeaderTitle[categoryId]} ({totalCount? totalCount : 0})</h1>
                    <nav className='flex justify-center items-center'>
                        <button className='flex items-center'>
                            <span className='px-3 text-lg'>Hide Filters</span>
                            <Image src='/static/icons/filter.svg' height="24px" width="24px" />
                        </button>
                        <div className="px-6 flex items-center cursor-pointer relative" onClick={ShowSort}>
                            <span className={showSort ? 'text-lg sort-by-up' : 'text-lg sort-by-down' }>Sort By</span>
                            <div className={showSort ? 'gird gap-2 absolute  top-10 right-1 w-40 bg-white rouded-2xl z-10' : 'hidden'}>
                                <ul className='text-sm py-4 px-2'>
                                    <li><a href="/" className='text-black flex pt-1 justify-end text-base'>Featured</a></li>
                                    <li><a href='/' className='text-black flex pt-1 justify-end text-base'>Newest</a></li>
                                    <li><a href='/' className='text-black flex pt-1 justify-end text-base'>Price : High-Low</a></li>
                                    <li><a href='/' className='text-black flex pt-1 justify-end text-base'>Price : Low-High</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
    )
}
export default HeaderCategory