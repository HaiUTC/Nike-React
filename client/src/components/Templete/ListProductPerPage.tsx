import { isEmpty } from "lodash"
import { useState } from "react"
import { useAppSelector } from "../../redux/hook"
import HeaderCategory from "../Atom/HeaderCategory"
import NoHaveProduct from "../Atom/NoHaveProduct"
import ListProduct from "../Molec/ListProduct"
import FilterProduct from "../Organ/FilterProduct"

interface IListProductPerPage {
    products : any,
    hasMore : boolean,
    totalCount : number,
    fetchMore : any,
    categoryId ?: number,
}
const ListProductPerPage = ({products,hasMore,totalCount,fetchMore,categoryId} : IListProductPerPage) => {
    const [showSort, setShowSort] = useState(false)
    const isShowFilter = useAppSelector((state) => state.showFilter.isShowFilter)
    const ShowSort = () => {setShowSort(!showSort)}
    return (
        <>
            <HeaderCategory showSort={showSort} ShowSort={ShowSort} totalCount={totalCount} categoryId={categoryId} isShowFilter={isShowFilter}/>
            <div className='flex'>
                <div className={isShowFilter ? 'w-80' : 'w-0'}>
                    <FilterProduct />
                </div>
                <div className={isShowFilter ? 'pl-8 w-full' : 'pl-0 w-full'}>
                    {isEmpty(products) ? <NoHaveProduct text="Not have product...."/> :
                        <ListProduct products={products} hasMore={hasMore} fetchMore={fetchMore}/>
                    }
                </div>
            </div>
            
        </>
    )
}
export default ListProductPerPage