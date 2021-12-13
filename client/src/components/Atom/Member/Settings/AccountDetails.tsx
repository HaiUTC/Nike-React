import { DesktopDatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useState } from "react";
import ChangePassword from '../../../Templete/Modal/ChangPassword'
import Success from "../../../Templete/Modal/Success";

const AccountDetails = ({data}) =>{
    const [showChangePassword, setShowChangePassword] = useState(false)
    const [doneChangePass, setDoneChangePass] = useState(false)
    const onShowDoneChangePass = () => setDoneChangePass(true)
    const onCloseDoneChangePass = () => setDoneChangePass(false)
    const onShowChangePassword = () => setShowChangePassword(true)
    const onCloseChangePassword = () => setShowChangePassword(false)
    return (
        
        <div>
            <p className='text-2xl pb-6'>Account Details</p>
            <div className="pb-4">
                <TextField disabled fullWidth id="demo-helper-text-misaligned" label="Email*" value={data.email} />
            </div>
            <div>
                <p className="text-lg py-3">Password</p>
                <div className="flex justify-between items-center">
                    <p className="text-lg">••••••••••••••••</p>
                    <p id="underline" className="text-xs cursor-pointer hover:text-gray-500" onClick={onShowChangePassword}>Edit</p>
                </div>
            </div>
            <div className="py-4">
                <p className="text-lg py-3">Phone Number</p>
                <div className="flex justify-between items-center">
                    <p className="text-lg"></p>
                    <p id="underline" className="text-xs cursor-pointer hover:text-gray-500">Add</p>
                </div>
            </div>
            <div className="py-4">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                disabled
                label="Date of Birth*"
                inputFormat="MM/dd/yyyy"
                value={new Date("2000-11-30T21:11:54")}
                onChange={null}
                renderInput={(params) => <TextField  {...params} />}
                />
                </LocalizationProvider>
            </div>
            <div>
                <p className="text-lg py-3">Location</p>
                <div className="pb-4">
                    <TextField disabled fullWidth id="demo-helper-text-misaligned" label="Country/Region**" value="VietNam" variant="outlined"/>
                </div>
                <div className="pb-4">
                    <TextField disabled fullWidth id="demo-helper-text-misaligned2" label="Province*" variant="outlined"/>
                </div>
                <div className="pb-4">
                    <TextField disabled fullWidth id="demo-helper-text-misaligned3" label="City*" variant="outlined"/>
                </div>
                <div className="pb-4">
                    <TextField disabled fullWidth id="demo-helper-text-misaligned4" label="PostCode*" variant="outlined"/>
                </div>
            </div>
            <div className="border-t-2 border-b-2 border-gray-200 flex justify-between items-center py-4">
                <p>Delete Account</p>
                <button className="px-8 py-2 border-2 rounded-full">Delete</button> 
            </div>
            <div className='flex lg:justify-end pt-4'>
                <button className="px-8 py-3 lgpy-2 rounded-full bg-gray-400 text-white w-full lg:w-auto" disabled>Save</button> 
            </div> 

            {showChangePassword && <ChangePassword handleClose={onCloseChangePassword} handleShow={onShowDoneChangePass}/>}
            {doneChangePass && 
                    <Success 
                        handleClose={onCloseDoneChangePass} 
                        image="/static/image/success.png" 
                        isBtn={false} 
                        text="Change password successfully"
                    />}
        </div>

    );
}

export default AccountDetails;