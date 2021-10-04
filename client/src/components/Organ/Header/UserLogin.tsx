import Link from 'next/link'
import Image from 'next/image'
const UserLogin = () => {
    return (
        <div className="flex relative text-xs"> 
                <Link href="/member/profile"> 
                    <a className="flex items-center text-black">Hi, Hai <span className='pl-2'><Image src='/img/user.svg' width="18px" height="18px"/></span></a>
                </Link>             
                <div className="hidden absolute w-80 bg-white rounded-md right-0 top-10">
                  <div className="px-6 py-4"><h5>Account</h5></div>
                  <div>
                    <ul style={{listStyle : 'none'}}>
                      <li><Link href="/member/profile"><a className='flex text-md text-black px-6 py-2'>Profile</a></Link></li>
                      <li><Link href="/cart"><a className='flex text-md text-black px-6 py-2'>Orders</a></Link></li>
                      <li><Link href="/favorite"><a className='flex text-md text-black px-6 py-2'>Favorites</a></Link></li>
                      <li><Link href="/"><a className='flex text-md text-black px-6 py-2'>Inbox</a></Link></li>
                      <li><Link href="/"><a className='flex text-md text-black px-6 py-2'>Event</a></Link></li>
                      <li><Link href="/"><a className='flex text-md text-black px-6 py-2'>Account Settings</a></Link></li>
                      <li><Link href="/"><a className='flex text-md text-black px-6 py-2'>Log Out</a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
    );
}
export default UserLogin