import HeaderSearch from "./HeaderSearch";
import HeaderSelect from "./HeaederSelect";
import UserHelp from "./UserHelp";
import UserLogin from "./UserLogin";
import UserNotLogin from "./UserNotLogin";
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='w-full'>
        <div className="flex justify-between h-8 px-8 w-full bg-gray-light">
          <div className="flex px-4">
              <Link href="/"><a className='flex'><Image className='m-auto' src='/img/icon-2.svg' width="20px" height="20px"/></a></Link>
          </div>
          <div className="flex">
            <UserHelp />            
            {/* <UserLogin />*/}
            <UserNotLogin />
          </div>
        </div>
        <HeaderSelect />
        <HeaderSearch />
      </div>
    );
}
export default Header