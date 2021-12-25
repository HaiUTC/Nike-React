import Image from 'next/image'
import Link from 'next/link'
const DetailProduct = ({data}) => {
  const {id, labelSpecial, name, numberColor, price, title,picture} = data
  const path = `/t/${name.split(" ").map(x => x.toLowerCase()).join("-")}&id=${id}`
    return (
      <div className='px-1 pb-16 relative w-full'>
            <Image 
                src={picture.url} 
                height="100%" 
                width="100%" 
                layout="responsive"
            />
          <div className="flex flex-col py-8 text-xs px-1 md:text-base md:px-0 ">
            <span className="text-red-500">{labelSpecial}</span>
            <span className="text-black">{name}</span>
            <span className="text-gray-500">{title}</span>
            <span className="text-gray-500">{numberColor} Colours</span>
            <span className="text-black py-2">${price}</span>
          </div>
          <Link href={path}>
            <a className='absolute top-0 bottom-0 left-0 right-0 w-full h-auto'/>
          </Link>
      </div>
    )
}
export default DetailProduct