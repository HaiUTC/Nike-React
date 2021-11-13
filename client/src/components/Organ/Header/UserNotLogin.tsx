import Link from 'next/link'
import { useEffect, useState } from 'react';
import LoginModal from '../../Templete/Modal/LoginModal';
const UserNotLogin = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};
    useEffect(()=> {
        return () => {
            setOpen(false); 
          };
    },[])
    return (
        <>
            <div className="m-auto text-xs">
                <Link href="/#"><a >Join Us</a></Link><span className='px-4'>|</span>
            </div>
                <div className="m-auto text-xs" onClick={handleClickOpen}><span className='cursor-pointer' >Sign In</span>
            </div>
            {open && <LoginModal handleClose={handleClose}/>}
        </>
    );
}
export default UserNotLogin