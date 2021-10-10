import Image from 'next/image'
import { useState } from 'react';
import LoginModal from '../../Templete/Modal/LoginModal';

const HeaderBarList = ({onOpenLogin}) => {
    return (
          <div className="bars-list">
              <div className="px-8 py-2">
                <ul>
                  <li className='py-2'>
                    <a className='text-black flex justify-between' href='/men'>
                        <span className='text-2xl'>Men</span>
                        <Image src="/static/icons/right.svg" height="10px" width="10px"/>
                    </a>
                  </li>
                  <li className='py-2'>
                    <a className='text-black flex justify-between' href='/woman'>
                        <span className='text-2xl'>Woman</span>
                        <Image src="/static/icons/right.svg" height="10px" width="10px"/>
                    </a>
                  </li>
                  <li className='py-2'>
                    <a className='text-black flex justify-between' href='/kid'>
                        <span className='text-2xl'>Kids</span>
                        <Image src="/static/icons/right.svg" height="10px" width="10px"/>
                    </a>
                  </li>
                  <li className='py-2'>
                    <a className='text-black flex justify-between' href='/customise'>
                        <span className='text-2xl'>Customise</span>
                        <Image src="/static/icons/right.svg" height="10px" width="10px"/>
                    </a>
                  </li>
                  <li className='py-2'>
                    <a className='text-black flex justify-between' href='/sale'>
                        <span className='text-2xl'>Sale</span>
                        <Image src="/static/icons/right.svg" height="10px" width="10px"/>
                    </a>
                  </li>
                  <li className='py-2'>
                    <a className='text-black flex justify-between' href='/snkrs'>
                        <span className='text-2xl'>SNKRS</span>
                        <Image src="/static/icons/right.svg" height="10px" width="10px"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="px-8 pt-10 pb-24">
                  <a href="/" className='flex items-center'>
                    <Image className='m-auto' src='/static/icons/icon-2.svg' width="30px" height="30px"/>
                    <span className='text-black px-4'>Jordan</span>
                  </a>
                </div>
                <div className="w-72 p-8">
                  <div > 
                      <div>
                        <span className="text-xl text-gray-500">Become a Nike Member for the best products, inspiration and stories in sport.<a href="/" className='text-black'>Learn more</a>
                        </span>
                        <div className="flex justify-around py-6 text-lg">
                          <button className='px-6 py-1 border rounded-full bg-black text-white'>Join Us</button>
                          <button className='px-6 py-1 border-2 border-gray-500 rounded-full' onClick={onOpenLogin}>Sign In</button>
                        </div>
                      </div>

                    <ul className='py-8'>
                      <li >
                        <a href="/" className='flex justify-start pb-4'>
                            <Image src='/static/icons/cart.svg' width={24} height={24} layout="fixed"/>
                          <span className='text-lg text-black pl-4'>Bags</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className='flex justify-start pb-4'>
                            <Image src='/static/icons/order.svg' width={24} height={24} layout="fixed"/>
                          <span className='text-lg text-black pl-4'>Orders</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className='flex justify-start pb-4'>
                            <Image src='/static/icons/help.svg' width={24} height={24} layout="fixed"/>
                          <span className='text-lg text-black pl-4'>Help</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default HeaderBarList