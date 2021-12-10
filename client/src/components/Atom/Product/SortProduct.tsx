import Link from 'next/link'
interface ISortProduct {
    isShowSort : boolean,
    ShowSort : any,
    pathName : string | string[]
}
const SortProduct = ({isShowSort,ShowSort,pathName} : ISortProduct) => {
    return (
        <div className="px-6 flex items-center cursor-pointer relative" onClick={ShowSort}>
            <span className={isShowSort ? 'text-lg sort-by-up' : 'text-lg sort-by-down' }>Sort By</span>
            <div className={isShowSort ? 'gird gap-2 absolute  top-10 right-1 w-40 bg-white rouded-2xl z-10' : 'hidden'}>
                <ul className='text-sm py-4 px-2'>
                    <li><Link href={`/w/${pathName}?sort=featured`}><a className='text-black flex pt-1 justify-end text-base'>Featured</a></Link></li>
                    <li><Link href={`/w/${pathName}?sort=newest`}><a className='text-black flex pt-1 justify-end text-base'>Newest</a></Link></li>
                    <li><Link href={`/w/${pathName}?sort=priceDesc`}><a className='text-black flex pt-1 justify-end text-base'>Price : High-Low</a></Link></li>
                    <li><Link href={`/w/${pathName}?sort=priceAsc`}><a className='text-black flex pt-1 justify-end text-base'>Price : Low-High</a></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default SortProduct