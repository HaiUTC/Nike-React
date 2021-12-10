import Image from 'next/image'
interface IToggleFilterProduct {
    showFilter ?: any,
    isShowFilter : boolean,
    title : string
}
const ToggleFilterProduct = ({showFilter,isShowFilter,title} : IToggleFilterProduct) => {
    const triggerFuncShowFilter = () => showFilter()
    return (
        <button className='flex items-center' onClick={triggerFuncShowFilter}>
            <span className='hidden lg:block px-3 text-lg'>{isShowFilter===true ? "Hide" : "Show"} {title}</span>
            <span className='block lg:hidden px-3 text-lg'>{title}</span>
            <Image src='/static/icons/filter.svg' height="24px" width="24px" />
        </button>
    )
}
export default ToggleFilterProduct