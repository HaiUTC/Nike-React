const ButtonCheckout = ({handleCheckOut}) => {
    return (
        <div>
            <button type='submit' className='w-full py-4 rounded-full bg-black text-base text-white' onClick={handleCheckOut}>Member Checkout</button>
        </div>
    )
}
export default ButtonCheckout