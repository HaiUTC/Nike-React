interface ILinkBlack {
    text : string,
    link : string,
    darkMode?: boolean
}
const LinkBlack = ({text,link,darkMode}: ILinkBlack) =>{
    return (
        <>
            <a href={link} className={'px-8 py-3 rounded-full boder-0' + (darkMode ?" text-white bg-black" : " text-black bg-white")}>{text}</a>
        </>
    )
} 
export default LinkBlack