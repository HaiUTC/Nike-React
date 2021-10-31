const ButtonAddProduct = () => {
    return (
        <div className='py-4'>
            <div><button className='bg-black py-4 px-6 border-2 rounded-full text-white align-center w-full text-base ' style={{outline : 'none'}} >Add to Bag</button></div>
            <div><button className='mt-2 border-gray-300 border-2 bg-white py-4 px-6 rounded-full text-black align-center w-full text-base ' style={{outline : 'none'}}>Favorite</button></div>
        </div>
    )
}
export default ButtonAddProduct