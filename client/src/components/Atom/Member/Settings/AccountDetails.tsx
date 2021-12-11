import { DesktopDatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const AccountDetails = ({data}) =>{
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
                    <p id="underline" className="text-xs cursor-pointer hover:text-gray-500">Edit</p>
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
                    <TextField disabled fullWidth id="demo-helper-text-misaligned" label="Country/Region**" value="VietNam" />
                </div>
                <div className="pb-4">
                    <TextField disabled fullWidth id="demo-helper-text-misaligned" label="Province*" />
                </div>
                <div className="pb-4">
                    <TextField disabled fullWidth id="demo-helper-text-misaligned" label="City*" />
                </div>
                <div className="pb-4">
                    <TextField disabled fullWidth id="demo-helper-text-misaligned" label="PostCode*"/>
                </div>
            </div>
            <div className="border-t-2 border-b-2 border-gray-200 flex justify-between items-center py-4">
                <p>Delete Account</p>
                <button className="px-8 py-2 border-2 rounded-full">Delete</button> 
            </div>
            <div className='flex lg:justify-end pt-4'>
                <button className="px-8 py-3 lgpy-2 rounded-full bg-gray-400 text-white w-full lg:w-auto" disabled>Save</button> 
            </div> 
        </div>
    );
}

export default AccountDetails;