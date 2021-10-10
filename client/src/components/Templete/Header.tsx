import Link from 'next/link'
import Image from 'next/image'
import UserHelp from '../Organ/Header/UserHelp'
import UserNotLogin from '../Organ/Header/UserNotLogin'
import HeaderSelect from '../Organ/Header/HeaederSelect'
import HeaderSearch from '../Organ/Header/HeaderSearch'
import UserLogin from '../Organ/Header/UserLogin'
import { MyProfileQuery } from '../../generated/graphql'

interface MyProfile {
  data : MyProfileQuery,
  loading : boolean
}
const Header = ({data,loading}:MyProfile) => {
  

  let body 
  if(loading){body = null}
  else if(data?.MyProfile){
    body = <div className="flex">
            <UserHelp />            
            <UserLogin data={data}/>
          </div>
  }
  else {
    body = <div className="flex">
            <UserHelp />            
            <UserNotLogin />
          </div>
  }
   return(
     <div id="header" className='w-full'>
        <div>
        <div className="flex justify-between h-8 px-8 w-full bg-gray-light">
          <div className="flex px-4">
              <Link href="/"><a className='flex'><Image className='m-auto' src='/static/icons/icon-2.svg' width="20px" height="20px"/></a></Link>
          </div>
          {body}
        </div>
        <HeaderSelect />
        <HeaderSearch />
      </div>

    </div>
   )
}
export default Header