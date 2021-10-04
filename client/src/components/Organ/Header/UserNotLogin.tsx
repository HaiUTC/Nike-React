import Link from 'next/link'
const UserNotLogin = () => {
    return (
        <>
            <div className="m-auto text-xs">
                <Link href="/#"><a >Join Us</a></Link><span className='px-4'>|</span>
            </div>
                <div className="m-auto text-xs"><span className='cursor-pointer'>Sign In</span>
            </div>
        </>
    );
}
export default UserNotLogin