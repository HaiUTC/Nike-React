import Link from 'next/link'
import { useState } from 'react';
const UserHelp = () => {
    return (
        <div id="main-help" className="m-auto text-xs relative">
              <Link href="/"><a id="help">Help</a></Link>
              <span className='px-4'>|</span>
              <div id='help-item' className="hidden absolute w-52 top-8 rounded-md" style={{left : "-150px"}} >
                <div className="px-4 py-2">
                  <h5 className='text-xl font-semibold '>Help</h5>
                </div>
                <div className='py-2'>
                  <ul style={{listStyle : 'none'}}>
                    <li><Link href="/"><a className='flex px-3 py-0 text-base text-black' >Order Status</a></Link></li>
                    <li><Link href="/"><a className='flex px-3 py-0 text-base text-black' >Dispatch and Delivery</a></Link></li>
                    <li><Link href="/"><a className='flex px-3 py-0 text-base text-black' >Returns</a></Link></li>
                    <li><Link href="/"><a className='flex px-3 py-0 text-base text-black' >Contact Us</a></Link></li>
                    <li><Link href="/"><a className='flex px-3 py-0 text-base text-black' >Privacy Policy</a></Link></li>
                    <li><Link href="/"><a className='flex px-3 py-0 text-base text-black' >Terms of Sale</a></Link></li>
                    <li><Link href="/"><a className='flex px-3 py-0 text-base text-black' >Terms of Use</a></Link></li>
                    <li><Link href="/"><a className='flex px-3 py-0 text-base text-black' >Send Us Feedback</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
    );
}
export default UserHelp