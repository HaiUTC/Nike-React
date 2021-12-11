import { Dialog, DialogContent,TextField } from "@mui/material";

const UpdateProfile = ({handleClose}) =>{
    return (
        <Dialog open={true} scroll={'paper'} maxWidth="sm"  onClose={handleClose}>
            <DialogContent>
                <div className="py-8 px-10 relative" >
                    <p className="text-2xl pb-6">Edit Profile Details</p>
                   
                    <div className="pb-4" style={{width : "450px"}}>
                        <TextField fullWidth id="demo-helper-text-misaligned" label="First Name*" value="Thanh Hải" />
                    </div>
                     <div className="pb-4">
                        <TextField id="demo-helper-text-misaligned" label="Last Name*" value="Nguyễn"/>
                     </div>
                    <div className="pb-4">
                        <TextField id="demo-helper-text-misaligned" label="Screen Name*" value="Nguyễn Thanh Hải"/>
                    </div>
                    <div className="pb-4">
                        <TextField id="demo-helper-text-misaligned" label="Hometown" />
                    </div>
                    <div className="pb-4">
                        <TextField id="demo-helper-text-misaligned" label="About Me" multiline rows={4}/>
                        <div className="flex justify-end"><span className="text-gray-500 text-xs">0/150</span></div>
                    </div>
                    
                    <div className="flex items-center justify-end pt-8">
                        <button className="px-8 py-2 border-2 rounded-full bg-gray-300" disabled>Save</button>
                    </div>
                    <div className="absolute top-4 right-8 cursor-pointer" onClick={handleClose}>
                        <img className="p-2 rounded-full bg-gray-100" src='/static/icons/exit2.svg'/>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default UpdateProfile;