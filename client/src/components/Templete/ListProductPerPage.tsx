import { useState } from "react"
import HeaderCategory from "../Atom/HeaderCategory"
import ListProduct from "../Molec/ListProduct"
import FilterProduct from "../Organ/FilterProduct"

const ListProductPerPage = () => {
    const [showSort, setShowSort] = useState(false)
    const ShowSort = () => {setShowSort(!showSort)}
    return (
        <>
            <HeaderCategory showSort={showSort} ShowSort={ShowSort}/>
            <div className='grid grid-cols-12'>
                <div className='col-span-2'><FilterProduct /></div>
                <div className='col-span-10 pl-8'><ListProduct /></div>
                
            </div>
            
        </>
    )
}
export default ListProductPerPage