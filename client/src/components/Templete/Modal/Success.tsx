import { Dialog, DialogContent } from "@mui/material";

interface Success {
    handleClose : () => void,
    image : string,
    text : string,
    isBtn : boolean,
    link ?: string,
    textBtn ?: string
}

const Success = ({handleClose,image,text,isBtn, link,textBtn} : Success) =>{
    return (
        <Dialog open={true} scroll={'paper'} maxWidth="sm"  onClose={handleClose}>
            <DialogContent>
                <div className='flex justify-center items-center flex-col py-8 px-10 relative'>
                    <div><img className='w-20 h-20' src={image} alt='success'/></div>
                    <div className='py-4'><span className='text-3xl'>{text}</span></div>
                    {isBtn && <div className='py-2'><a className='text-white flex text-base bg-black rounded-full py-2 px-20' href={link}>{textBtn}</a></div>}
                    <div className="absolute top-4 right-8 cursor-pointer" onClick={handleClose}>
                        <img className="p-2 rounded-full bg-gray-100" src='/static/icons/exit2.svg'/>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default Success;