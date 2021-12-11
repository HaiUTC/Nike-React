import { Avatar, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import UpdateAvatar from "../../../Templete/Modal/UpdateAvatar";
import UpdateProfile from "../../../Templete/Modal/UpdateProfile";



const ProfileVisiblity = ({data}) =>{
    const [showUpdateAvatar, setShowUpdateAvatar] = useState(false)
    const [showUpdateProfile, setShowUpdateProfile] = useState(false)
    const handleOpenUpdateAvatar = () => setShowUpdateAvatar(true)
    const handleCloseUpdateAvatar = () => setShowUpdateAvatar(false)
    const handleOpenUpdateProfile = () => setShowUpdateProfile(true)
    const handleCloseUpdateProfile = () => setShowUpdateProfile(false)
    return (
        <div>
            
            <p className='text-2xl pb-6'>Profile Visibility</p>
            <p className='text-base pb-2'>Your Nike profile represents you on product reviews and across the Nike family of apps.</p>

            <div className="border-b-2 boder-gray-300 flex">
                <div className="flex flex-col items-center justify-center py-6 cursor-pointer" onClick={handleOpenUpdateAvatar}>
                    <Avatar src={data.avatar} sx={{ width: 120, height: 120 }}/>
                    <img className="pt-3" src='/static/icons/upload.svg'/>
                </div>
                <div className="pl-14 flex flex-col justify-center items-center py-6">
                    <p>Profile Display</p>
                    <p className="text-gray-500 pb-6">{data.name}</p>
                    <button className="px-8 py-1 rounded-full border-2 border-gray-500" onClick={handleOpenUpdateProfile}>Edit</button>
                </div>
            </div>
            <div className='py-6'>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className='text-base text-black pb-2'>Product Review Visibility</FormLabel>
                    <FormLabel component="legend" className='text-base text-black pb-4'>Choose how you will appear on any Nike product reviews you complete. Changing these settings will also affect your visibility for connecting with friends on the Nike Training Club and Nike Run Club apps.</FormLabel>
                    <RadioGroup className='px-6' aria-label="review" defaultValue="social" name="radio-buttons-group">
                        <FormControlLabel value="private" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Private: Profile visible to only you" />
                        <FormControlLabel value="social" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Social: Profile visible to friends" />
                        <FormControlLabel value="public" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Public: Everyone can view profile" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className='text-base text-black pb-4'>Location Sharing</FormLabel>
                    <RadioGroup className='px-6' aria-label="location" defaultValue="share" name="radio-buttons-group">
                        <FormControlLabel value="share" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Share my location with friends only" />
                        <FormControlLabel value="noshare" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Don't share my location" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='flex justify-end pt-4'>
                <button className="px-8 py-3 lgpy-2 rounded-full bg-black text-white w-full lg:w-auto" >Save</button> 
            </div>
            {showUpdateAvatar && <UpdateAvatar handleClose={handleCloseUpdateAvatar} avatar={data.avatar}/>}
            {showUpdateProfile && <UpdateProfile handleClose={handleCloseUpdateProfile}/>}
        </div>
    );
}

export default ProfileVisiblity;