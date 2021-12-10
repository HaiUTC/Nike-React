import Image from 'next/image'
const HeaderListCommnent = (props) => {
  const closeListComment = (e) => {
    e.preventDefault()
    props.handleCloseListComment()
  }
    return (
        <div className="py-4 lg:px-4 flex justify-between">
          <div className="grid grid-cols-12 gap-0 lg:gap-2">
            <div className="col-span-4 h-20 w-20">
              <img
                src={props.image}
                alt={props.name}
              />
            </div>
            <div className="col-span-8 flex justify-start  flex-col text-base">
              <div><span>{props.name}</span></div>
              <div><span>${props.price}</span></div>
            </div>
          </div>
          <div className="flex items-center" onClick={closeListComment}>
            <Image src="/static/icons/exit.svg" className="h-6 w-4 cursor-pointer" width="20px" height="20px"/>
          </div>
        </div>
    );
}

export default HeaderListCommnent;