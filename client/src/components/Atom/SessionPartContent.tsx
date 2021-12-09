import LinkBlack from "./LinkBlack"

interface ISessionPartContent {
    url : string,
    name ?: string,
    type :string,
    link : string,
    height : string,
    darkMode : boolean,
    isAbsolute ?: boolean
}
const SessionPartContent = ({url,name,type,link,height,darkMode,isAbsolute} : ISessionPartContent) => {
    return(
        <div className="relative px-2 w-full pt-2 md:pt-0" >
            <img src={url} className='bg-center bg-cover object-cover w-full' style={{height}}/>
            <div className={"mt-auto " + (isAbsolute===false ? "pt-4" : "absolute bottom-0 pl-10 pb-10")}>
                <div><span className={"text-xl" + (darkMode ? " text-black":" text-white")}>{name}</span></div>
                <div className="flex pt-4">
                    <LinkBlack text={type} link={link} darkMode={darkMode}/>
                </div>
            </div>
            <a href={link} className='absolute h-full w-full top-0'/>
        </div>
    )
}
export default SessionPartContent