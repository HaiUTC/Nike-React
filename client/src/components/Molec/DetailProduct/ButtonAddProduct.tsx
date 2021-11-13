import { useState } from "react";
import { useAddProductToCartMutation, useMyProfileQuery } from "../../../generated/graphql";
import NotificationAddProductToCart from "../../Atom/NotificationAddProductToCart";
import LoginModal from "../../Templete/Modal/LoginModal";


const ButtonAddProduct = ({urlImage,name,title,size,price,haveSize,color,productId}) => {
    const {data} = useMyProfileQuery()
    const [addProductTocart, {loading : _addProductTocartLoading}] = useAddProductToCartMutation()
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false)
    const handleClose = () => { setOpen(false)}
    const handleCloseModal = () => { setIsLogin(false) }
    const addTocart = async () => {
        if(!data.MyProfile){setIsLogin(true)}
        else{
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
                    setOpen(true)
                }
            }
        }
    }
    return (
        <>
            <NotificationAddProductToCart open={open} handleClose={handleClose} urlImage={urlImage} name={name} title={title} size={size} price={price}/>
            <div className='py-4'>
                <div><button className='bg-black py-4 px-6 border-2 rounded-full text-white align-center w-full text-base ' style={{outline : 'none'}} onClick={addTocart}>Add to Bag</button></div>
                <div><button className='mt-2 border-gray-300 border-2 bg-white py-4 px-6 rounded-full text-black align-center w-full text-base ' style={{outline : 'none'}}>Favorite</button></div>
            </div>
            {isLogin && <LoginModal handleClose={handleCloseModal}/>}
        </>
    )
}
export default ButtonAddProduct