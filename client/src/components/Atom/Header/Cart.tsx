import Link from 'next/link'
import { useContext, useState } from 'react'
import { UserContext } from '../../../libs/UserContext'
import { useAppSelector } from '../../../redux/hook'
import LoginModal from '../../Templete/Modal/LoginModal'

const Cart = () => {
    const [isUser] = useContext(UserContext)
    const [isClick,setIsClick] = useState(false)
    const checkUser = (e) => {
        if(!isUser){
            e.preventDefault();
            setIsClick(true)
        }
    }
    const numCart = useAppSelector((state) => state.countNumber.numCart);
    const handleClose= () => {setIsClick(false)}
    return (
        <div className="m-auto">
            <Link href='/cart'>
                <a className='relative rounded-full flex justify-center items-center p-2 hover:bg-gray-300' onClick={checkUser}>
                    <img src='/static/icons/cart.svg' width={24} height={24} />
                        <span className='absolute text-black text-sm top-3 font-semibold'>
                            {!isUser ? "" : (numCart) > 9 ? "9+" : (numCart == 0 ? "" : numCart)}
                        </span>
                </a>
            </Link>
            {isClick && <LoginModal handleClose={handleClose}/>}
        </div>
    )
}
export default Cart