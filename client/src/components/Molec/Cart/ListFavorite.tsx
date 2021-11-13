import ProductFavorite from "../../Atom/ProductFavorite"

const ListFavorite = ({data}) => {
    return (
        <div>
            <div className="py-4"><span className="text-lg md:text-2xl text-semibold ">Favorites</span></div>
            {data ? (
                <>
                    <div><ProductFavorite /></div>
                    <a href="/favorite" className="flex text-gray-500 text-base underline">Go to Favorites</a>
                </>
            ) : (<span className="text-base h-20">There are no items in your favorite.</span>)}
        </div>
    )
}
export default ListFavorite