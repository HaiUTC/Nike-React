import { Dialog, DialogContent } from "@mui/material";


const SuccessOrNotCheckOut = ({image,text,isBtn, link,textBtn} : SuccessOrNotCheckOut) =>{
    return (
        <Dialog open={true} scroll={'paper'} maxWidth="sm" >
            <DialogContent>
                <div className='flex justify-center items-center flex-col py-8 px-10 relative'>
                    <div><img className='w-20 h-20' src={image} alt='success'/></div>
                    <div className='py-4'><span className='text-3xl'>{text}</span></div>
                    {isBtn && <div className='py-3'><a className='text-white flex text-base bg-black rounded-full py-4 px-20' href={link}>{textBtn}</a></div>}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default SuccessOrNotCheckOut;

interface SuccessOrNotCheckOut {
    image : string,
    text : string,
    isBtn : boolean,
    link ?: string,
    textBtn ?: string
}