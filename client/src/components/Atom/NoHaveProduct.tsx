interface INoHaveProduct {
    text : string
}
const NoHaveProduct = ({text} : INoHaveProduct) => {
    return (
        <div className='flex justify-center item-center w-full h-80'>
            <h1 className='text-2xl m-auto'>{text}</h1>
        </div>
    )
}
export default NoHaveProduct