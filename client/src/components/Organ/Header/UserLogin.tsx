import { Avatar } from '@mui/material'
import Link from 'next/link'
import { MyProfileDocument, MyProfileQuery, useLogoutMutation } from '../../../generated/graphql'


const UserLogin = ({avatar, name}: IUserLogin) => {
  const [logout, {loading: _userLogoutLoading}] = useLogoutMutation()
  const logoutUser = async () => {
    await logout({
      update(cache,{data}){
        if(data?.Logout){
          cache.writeQuery<MyProfileQuery>({
            query : MyProfileDocument,
            data : {MyProfile : null}
          })
        }
        
      }
    })
  }
    return (
        <div className="flex relative text-xs"> 
          <Link href="/member/profile"> 
              <a id='user' className="flex items-center text-black">Hi, {name.split(" ")[0]} 
                <span className='pl-2'><Avatar alt={name} src={avatar} sx={{ width: 24, height: 24 }}/></span>
              </a>
          </Link>             
          <div id='user_select' className="hidden absolute w-48 bg-white rounded-lg right-0 top-10 z-10">
            <div className="px-4 py-1 text-lg"><h5>Account</h5></div>
            <div className='py-2'>
              <ul style={{listStyle : 'none'}}>
                <li><a href="/member/profile" className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Profile</a></li>
                <li><a href="/orders" className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Orders</a></li>
                <li><a href="/favorite" className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Favorites</a></li>
                <li><a href="/member/inbox" className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Inbox</a></li>
                <li><a href="/" className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Event</a></li>
                <li><a href="/member/settings" className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Account Settings</a></li>
                <li><a href="/" className='flex text-sm text-gray-500 hover:text-black px-3 py-1' onClick={logoutUser}>Log Out</a></li>
              </ul>
            </div>
          </div>
        </div>
    );
}
export default UserLogin

interface IUserLogin{
  avatar : string,
  name : string
}