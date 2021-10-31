import Link from 'next/link'


interface ICart{
    numberCart ?: number
}
const Cart = ({...props}:ICart) => {
    return (
        <div className="m-auto">
            <Link href='/cart'>
                <a className='relative rounded-full flex justify-center items-center p-2 hover:bg-gray-300'>
                    <img src='/static/icons/cart.svg' width={24} height={24} /><span className='absolute text-black text-sm top-3 font-semibold'>{props.numberCart}</span>
                </a>
            </Link>
        </div>
    )
}
export default Cart