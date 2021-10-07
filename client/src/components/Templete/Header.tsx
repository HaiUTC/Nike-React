import Link from 'next/link'
import Image from 'next/image'
import UserHelp from '../Organ/Header/UserHelp'
import UserNotLogin from '../Organ/Header/UserNotLogin'
import HeaderSelect from '../Organ/Header/HeaederSelect'
import HeaderSearch from '../Organ/Header/HeaderSearch'
import UserLogin from '../Organ/Header/UserLogin'
import { useMyProfileQuery } from '../../generated/graphql'

const Header = () => {
  const {data,loading} = useMyProfileQuery()

  let body 
  if(loading){
    body = null
  }
  else if(data?.MyProfile){
    body = <div className="flex">
            <UserHelp />            
            <UserLogin />
          </div>
  }
  else {
    body = <div className="flex">
            <UserHelp />            
            <UserNotLogin />
          </div>
  }
   return(
      <div className='w-full'>
      <div className="flex justify-between h-8 px-8 w-full bg-gray-light">
        <div className="flex px-4">
            <Link href="/"><a className='flex'><Image className='m-auto' src='/img/icon-2.svg' width="20px" height="20px"/></a></Link>
        </div>
        {body}
      </div>
      <HeaderSelect />
      <HeaderSearch />
    </div>
   )
}
export default Header