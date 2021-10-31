import { useRouter } from 'next/router'
import SortProduct from '../../Atom/SortProduct'
import ToggleFilterProduct from '../../Atom/ToogleFilterProduct'

interface IHeaderCategory {
    showSort : boolean,
    ShowSort : any,
    totalCount : number,
    categoryId?: number,
    isShowFilter : boolean,
    showFilter : any
}
enum HeaderTitle {
    "All Products"= undefined,
    "Men's Shoes" = 1,
    "Men's Clothings" = 2,
    "Men's Gears" = 3
}
const HeaderCategory = ({showSort,ShowSort,totalCount,categoryId,isShowFilter,showFilter}:IHeaderCategory) => {
    const router = useRouter()
    const pathName = router.query?.categoryStruction
    return (
        <header className='py-6'>
            <div className='flex justify-between'>
                <h1 className='text-2xl'>{HeaderTitle[categoryId]} ({totalCount? totalCount : 0})</h1>
                <nav className='flex justify-center items-center'>
                    <ToggleFilterProduct showFilter={showFilter} isShowFilter={isShowFilter} title="Filters"/> 
                    <SortProduct isShowSort={showSort} ShowSort={ShowSort} pathName={pathName}/>
                </nav>
            </div>
        </header>
    )
}
export default HeaderCategory