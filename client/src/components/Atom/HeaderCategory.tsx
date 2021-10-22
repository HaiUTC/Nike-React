import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../redux/hook'
import { toggleShowFilter } from '../../redux/Product/showFilter'

interface IHeaderCategory {
    showSort : boolean,
    ShowSort : any,
    totalCount : number,
    categoryId?: number,
    isShowFilter : boolean
}
enum HeaderTitle {
    "All Products"= undefined,
    "Men's Shoes" = 1,
    "Men's Clothings" = 2,
    "Men's Gears" = 3
}
const HeaderCategory = ({showSort,ShowSort,totalCount,categoryId,isShowFilter}:IHeaderCategory) => {
    const router = useRouter()
    const pathName = router.query?.categoryStruction
    const dispatch = useAppDispatch()
    const showFilter = () => {
        dispatch(toggleShowFilter())   
    }
    return (
        <header className='py-6'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl'>{HeaderTitle[categoryId]} ({totalCount? totalCount : 0})</h1>
                    <nav className='flex justify-center items-center'>
                        <button className='flex items-center' onClick={showFilter}>
                            <span className='px-3 text-lg'>{isShowFilter===true ? "Hide" : "Show"} Filters</span>
                            <Image src='/static/icons/filter.svg' height="24px" width="24px" />
                        </button>
                        <div className="px-6 flex items-center cursor-pointer relative" onClick={ShowSort}>
                            <span className={showSort ? 'text-lg sort-by-up' : 'text-lg sort-by-down' }>Sort By</span>
                            <div className={showSort ? 'gird gap-2 absolute  top-10 right-1 w-40 bg-white rouded-2xl z-10' : 'hidden'}>
                                <ul className='text-sm py-4 px-2'>
                                    <li><Link href={`/w/${pathName}?sort=featured`}><a className='text-black flex pt-1 justify-end text-base'>Featured</a></Link></li>
                                    <li><Link href={`/w/${pathName}?sort=newest`}><a className='text-black flex pt-1 justify-end text-base'>Newest</a></Link></li>
                                    <li><Link href={`/w/${pathName}?sort=priceDesc`}><a className='text-black flex pt-1 justify-end text-base'>Price : High-Low</a></Link></li>
                                    <li><Link href={`/w/${pathName}?sort=priceAsc`}><a className='text-black flex pt-1 justify-end text-base'>Price : Low-High</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
    )
}
export default HeaderCategory