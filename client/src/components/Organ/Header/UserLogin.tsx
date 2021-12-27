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
                <li><Link href="/member/profile"><a className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Profile</a></Link></li>
                <li><Link href="/cart"><a className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Orders</a></Link></li>
                <li><Link href="/favorite"><a className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Favorites</a></Link></li>
                <li><Link href="/member/inbox"><a className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Inbox</a></Link></li>
                <li><Link href="/"><a className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Event</a></Link></li>
                <li><Link href="/member/settings"><a className='flex text-sm text-gray-500 hover:text-black px-3 py-1'>Account Settings</a></Link></li>
                <li><Link href="/"><a className='flex text-sm text-gray-500 hover:text-black px-3 py-1' onClick={logoutUser}>Log Out</a></Link></li>
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