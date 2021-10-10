import Image from 'next/image'
const Bar = ({onOpen}) => {
    return (
        <div className="flex p-2 rounded-full m-auto items-center hover:bg-gray-300">
            <button className='border-0 bg-transparent flex items-center' style={{outline : 'none'}} onClick={onOpen}>
                <Image src='/static/icons/bar.svg' width="25px" height="25px"/>
            </button>
        </div>
    )
}
export default Bar