import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className="footer bg-black mt-4 text-xs md:text-md">
      <div className="p-2 border-b-2 flex justify-between flex-col md:flex-row  md:p-8">
        <div className="flex justify-start flex-col md:flex-row">
          <div className="px-4 md:px-6">
            <ul className="">
              <li><a href="/" className="text-white py-1 flex font-bold">FIND A STORE</a></li>
              <li><a href="/" className="text-white py-1 flex font-bold">BECOME A MEMBER</a></li>
              <li><a href="/" className="text-white py-1 flex font-bold">SIGN UP FOR EMAIL</a></li>
              <li><a href="/" className="text-white py-1 flex font-bold">SEND US FEEDBACK</a></li>
            </ul>
          </div>
          <div className="px-4">
            <ul className="">
              <li><a href="/" className="text-white py-1 flex font-bold">GET HELP</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">Order Status</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">Delivery</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">Returns</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">Payment Options</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">Contact Us</a></li>
            </ul>
          </div>
          <div className="px-4">
            <ul className="">
              <li><a href="/" className="text-white py-1 flex font-bold">ABOUT NIKE</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">News</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">Careers</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">Investors</a></li>
              <li><a href="/" className="text-white py-1 flex text-gray-500">Sustainability</a></li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex justify-around w-full flex-row md:w-40">
            <li><Link href="/"><a className='px-2' title="Twitter"><Image src="/static/icons/twitter.svg" height="24px" width="24px" layout="fixed" /></a></Link> </li>
            <li><Link href="/"><a className='px-2' title="Facebook"><Image src="/static/icons/facebook.svg" height="24px" width="24px" layout="fixed" /></a></Link> </li>
            <li><Link href="/"><a className='px-2' title="Youtube"><Image src="/static/icons/youtube.svg" height="24px" width="24px" layout="fixed" /></a></Link> </li>
            <li><Link href="/"><a className='px-2' title="Instagram"><Image src="/static/icons/instagram.svg" height="24px" width="24px" layout="fixed" /></a></Link> </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between py-4 px-4 md:px-6 flex-col md:flex-row">
        <div className="md:flex md:px-10">
          <div className="text-white flex">
            <svg className="fill-current text-white" height="15px" width="18px" fill="#111" viewBox="0 0 42 58">
              <path d="M21 0C9.4 0 0 9.5 0 21.2 0 39.9 21 58 21 58s21-18.1 21-36.8C42 9.5 32.6 0 21 0zm0 31c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
            </svg>
            <span>VietNam</span>
          </div>
          <div className="text-gray-500 pl-2">
            <span>© 2020 Nike, Inc. All Rights Reserved</span>
          </div>
        </div>
        <div>
          <ul className="flex justify-around flex-wrap flex-col md:flex-row">
            <li className='py-2 md:py-0'><a href="/" className="px-2 text-gray-500">Guides</a></li>
            <li className='py-2 md:py-0'><a href="/" className="px-2  text-gray-500">Terms of Sale</a></li>
            <li className='py-2 md:py-0'><a href="/" className="px-2 text-gray-500">Terms of Use</a></li>
            <li className='py-2 md:py-0'><a href="/" className="px-2 text-gray-500">TNike Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    )
}
export default Footer