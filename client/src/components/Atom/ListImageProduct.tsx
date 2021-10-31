const ListImageProduct = ({data,indexPoster}) => {
    return (
        <div className="grid grid-cols-12 gap-3 w-full">
            {data[indexPoster].url.map((item,index) => (
                <div key={index} className="col-span-6">
                    <img src={item} alt="Detail Image Product"/>
                </div>
            ))}
        </div>
    )
}
export default ListImageProduct