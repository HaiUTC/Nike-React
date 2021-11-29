import Image from 'next/image'
const HeaderListCommnent = ({handleCloseListComment}) => {
  const closeListComment = (e) => {
    e.preventDefault()
    handleCloseListComment()
  }
    return (
        <div className="py-4 px-4 flex justify-between">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4 h-20 w-20">
          <img
            src="https://static.nike.com/a/images/t_default/ce9918f8-cc9d-4c8e-9e4a-8afc4a22fe9b/air-max-2021-mens-shoes-8F4Sk5.png"
            alt="text"
          />
        </div>
        <div className="col-span-8 flex justify-center items-center flex-col text-base">
          <div><span>Nike Air Max 2021</span></div>
          <div><span>$160</span></div>
        </div>
      </div>
      <div className="flex items-center" onClick={closeListComment}>
        <Image src="/static/icons/exit.svg" className="h-6 w-4 cursor-pointer" width="20px" height="20px"/>
      </div>
    </div>
    );
}

export default HeaderListCommnent;