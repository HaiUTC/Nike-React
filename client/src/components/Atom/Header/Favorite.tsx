import Link from 'next/link'
import Image from 'next/image'
const Favorite = () => {
    return (
        <div className="px-2 m-auto">
            <Link href='/favorite'>
            <a className='rounded-full flex justify-center items-center p-2'>
                <Image src='/img/favorite.svg' width="24px" height="24px"/>
            </a>
            </Link>
        </div>
    );
}
export default Favorite