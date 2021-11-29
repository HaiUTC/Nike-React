import dynamic from 'next/dynamic'
import { useContext, useState } from "react";
import { useAddProductToCartMutation } from "../../../generated/graphql";
import { UserContext } from '../../../libs/UserContext';
import { changeNumCart } from "../../../redux/Cart/countNumber";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
const NotificationAddProductToCart = dynamic(() => import("../../Atom/NotificationAddProductToCart"),{ ssr: false })
const LoginModal = dynamic(() => import("../../Templete/Modal/LoginModal"),{ ssr: false })


const ButtonAddProduct = ({urlImage,name,title,size,price,haveSize,color,productId}) => {
    const {isUser} = useContext(UserContext)
    const [addProductTocart, {loading : _addProductTocartLoading}] = useAddProductToCartMutation()

    const numCart = useAppSelector((state) => state.countNumber.numCart);
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);


    const handleClose = () => { setOpen(false)}
    const handleCloseModal = () => { setLogin(false) }


    const addTocart = async () => {
        if(isUser[0]){
            if(size=== 0){ haveSize(false) }
            else{
                const response = await addProductTocart({
                    variables : {
                        cartInput : {
                            productId,
                            color,
                            size
                        }
                    }
                })
                if(response.data.AddProductToCart.errors){
                    console.log(response.data.AddProductToCart.message)
                }
                else if(response.data.AddProductToCart.success){
                    dispatch(changeNumCart(numCart+1))
                    setOpen(true)
                }
            }
        }
        else{
            setLogin(true)
        }
    }


    return (
        <>
            <NotificationAddProductToCart open={open} handleClose={handleClose} urlImage={urlImage} name={name} title={title} size={size} price={price}/>
            <div className='py-4'>
                <div><button className='bg-black py-4 px-6 border-2 rounded-full text-white align-center w-full text-base ' style={{outline : 'none'}} onClick={addTocart}>Add to Bag</button></div>
                <div><button className='mt-2 border-gray-300 border-2 bg-white py-4 px-6 rounded-full text-black align-center w-full text-base ' style={{outline : 'none'}}>Favorite</button></div>
            </div>
            {login && <LoginModal handleClose={handleCloseModal}/>}
        </>
    )
}
export default ButtonAddProduct