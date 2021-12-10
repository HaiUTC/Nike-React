import { IconButton, Snackbar, SnackbarContent } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
const NotificationAddProductToCart = ({handleClose,open,urlImage,name,title,size,price}) => {
    const action = (<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}><CloseIcon fontSize="small" /></IconButton>)
    return (
        <Snackbar
        className='bg-white'
        anchorOrigin={{ vertical : "top", horizontal : "right"  }}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        open={open}>
            <SnackbarContent message={
            <div className='w-80 bg-white'>
                <CheckCircleIcon sx={{color : "black"}} /> <span className="text-black pl-2">Add product successfully</span>
      <div className="grid grid-cols-12 gap-6 py-4 w-full">
        {/*image */}
        <div className="col-span-4">
          <img src={urlImage} alt="Product Image" />
        </div>
        {/*info */}
        <div className="col-span-8">
          <div className="text-lg">
            <span className="text-black">{name}</span>
            <br />
            <span className="text-gray-500 text-base">{title}</span>
            <br />
            <span className="text-gray-500 text-base">Size EU {size}</span>
            <br />
            <span className="text-gray-500 text-base">{price} $</span>
            <br />
          </div>
        </div>
      </div>
      <div className='flex justify-between py-4'>
        <div><a href='/cart' className='py-2 px-8 border-2 border-gray-400 text-black rounded-full text-lg'>View Bag</a></div>
        <div><a href='/checkout' className='py-2 px-8 bg-black text-white rounded-full text-lg'>Checkout</a></div>
      </div>
    </div>}></SnackbarContent>
        </Snackbar>
    )
}
export default NotificationAddProductToCart