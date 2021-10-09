import Link from 'next/link'
import Image from 'next/image'
const Cart = () => {
    return (
        <div className="m-auto">
            <Link href='/cart'>
                <a className='relative rounded-full flex justify-center items-center p-2 hover:bg-gray-300'>
                    <Image src='/img/cart.svg' width={24} height={24} layout="fixed"/><span className='absolute text-black text-sm top-3 font-semibold'>10</span>
                </a>
            </Link>
        </div>
    )
}
export default Cart