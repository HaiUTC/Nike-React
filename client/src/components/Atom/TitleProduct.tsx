const TitleProduct = ({name,price,title} : ITitlePro) => {
    return (
            <div className="col-span-8">
                <p className='text-3xl'>{name}</p>
                <p className='text-base pt-1'>{title}</p>
                <p className='text-base pt-3' >${price}</p>
            </div>
    )
}
export default TitleProduct

interface ITitlePro{
    name : string,
    price : number,
    title : string
}