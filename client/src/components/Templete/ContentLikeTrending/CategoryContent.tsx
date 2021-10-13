import SessionPartContent from "../../Atom/SessionPartContent"
interface ISessionPartContent {
    url : string,
    name ?: string,
    type :string,
    link : string,
    height : string,
    darkMode : boolean
}
interface ICategoryContent {
    data : Array<ISessionPartContent>,
    title : string
}

const CategoryContent = ({data,title}: ICategoryContent) =>{
    const body = data.map((item) => <SessionPartContent key={item.url} {...item}/>)
    return (
        <div>
            <div className="py-6 text-2xl"><span>{title}</span></div>
            <div className="flex flex-col justify-around w-full md:flex-row">
                {body}
            </div>
            </div>
    )
}
export default CategoryContent