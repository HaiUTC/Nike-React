import Link from 'next/link'
import { useState } from 'react'
import { useCheckAuth } from '../../../utils/useCheckAuth'
import LoginModal from '../../Templete/Modal/LoginModal'


interface ICart{
    numberCart ?: number
}
const Cart = ({...props}:ICart) => {
    const {isUser} = useCheckAuth()
    const [isClick,setIsClick] = useState(false)
    const checkUser = (e) => {
        if(!isUser){
            e.preventDefault();
            setIsClick(true)
        }
    }
    const handleClose= () => {setIsClick(false)}
    return (
        <div className="m-auto">
            <Link href='/cart'>
                <a className='relative rounded-full flex justify-center items-center p-2 hover:bg-gray-300' onClick={checkUser}>
                    <img src='/static/icons/cart.svg' width={24} height={24} /><span className='absolute text-black text-sm top-3 font-semibold'>{(props.numberCart) > 9 ? "9+" : (props.numberCart == 0 ? "" : props.numberCart)}</span>
                </a>
            </Link>
            {isClick && <LoginModal handleClose={handleClose}/>}
        </div>
    )
}
export default Cart