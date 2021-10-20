import { isEmpty } from "lodash"
import { useState } from "react"
import HeaderCategory from "../Atom/HeaderCategory"
import NoHaveProduct from "../Atom/NoHaveProduct"
import ListProduct from "../Molec/ListProduct"
import FilterProduct from "../Organ/FilterProduct"

interface IListProductPerPage {
    products : any,
    hasMore : boolean,
    totalCount : number,
    fetchMore : any,
    categoryId ?: number
}
const ListProductPerPage = ({products,hasMore,totalCount,fetchMore,categoryId} : IListProductPerPage) => {
    const [showSort, setShowSort] = useState(false)
    const ShowSort = () => {setShowSort(!showSort)}
    return (
        <>
            <HeaderCategory showSort={showSort} ShowSort={ShowSort} totalCount={totalCount} categoryId={categoryId}/>
            <div className='grid grid-cols-12'>
                <div className='col-span-2'>
                    <FilterProduct />
                </div>
                <div className='col-span-10 pl-8'>
                    {isEmpty(products) ? <NoHaveProduct text="Not have product...."/> :
                        <ListProduct products={products} hasMore={hasMore} fetchMore={fetchMore}/>
                    }
                </div>
            </div>
            
        </>
    )
}
export default ListProductPerPage