import Image from 'next/image'
const NextPrevIcons = ({link}) => {
    return (
        <div className='p-3 rounded-full bg-gray-300 flex items-center'>
            <Image src={link} height="25px" width="25px"/>
        </div>
    )
}
export default NextPrevIcons