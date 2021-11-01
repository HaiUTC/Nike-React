import { useState } from "react";
import NotificationAddProductToCart from "../../Atom/NotificationAddProductToCart";


const ButtonAddProduct = ({urlImage,name,title,size,price}) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => { setOpen(false)}
    return (
        <>
            <NotificationAddProductToCart open={open} handleClose={handleClose} urlImage={urlImage} name={name} title={title} size="12" price={price}/>
            <div className='py-4'>
                <div><button className='bg-black py-4 px-6 border-2 rounded-full text-white align-center w-full text-base ' style={{outline : 'none'}} >Add to Bag</button></div>
                <div><button className='mt-2 border-gray-300 border-2 bg-white py-4 px-6 rounded-full text-black align-center w-full text-base ' style={{outline : 'none'}}>Favorite</button></div>
            </div>
        </>
    )
}
export default ButtonAddProduct