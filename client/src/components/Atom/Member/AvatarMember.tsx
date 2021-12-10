import { Avatar } from "@mui/material";


const AvatarMember = ({user}) =>{
    
    return (
        <div className='flex justify-start pt-16'>
            <div><Avatar sx={{ width: 80, height: 80 }} src={user[0].MyProfile.avatar} alt='text' /></div>
            <div className='pl-6'>
                <p className="text-3xl lg:text-4xl">{user[0].MyProfile.name}</p>
                <p className="text-base lg:text-lg text-gray-500">Nike Member Since July 2021</p>
            </div>
        </div>
    );
}

export default AvatarMember;