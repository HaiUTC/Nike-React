import DetailProduct from "../Atom/DetailProduct"

const ListProduct = () => {
    return (
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-6 md:col-span-4'><DetailProduct/></div>
            <div className='col-span-6 md:col-span-4'><DetailProduct/></div>
            <div className='col-span-6 md:col-span-4'><DetailProduct/></div>
            <div className='col-span-6 md:col-span-4'><DetailProduct/></div>
            <div className='col-span-6 md:col-span-4'><DetailProduct/></div>
            <div className='col-span-6 md:col-span-4'><DetailProduct/></div>
        </div>
    )
}
export default ListProduct