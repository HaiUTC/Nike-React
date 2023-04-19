import LinkBlack from "../Button/LinkBlack";
interface DataPlayBook {
    sideLeft : boolean,
    btn : string,
    title : string,
    url : string
}
const content= (sideLeft,btn,title) => (
    <div className='col-span-6'>
        <div className={"absolute bottom-12" + (sideLeft ? " left-8" : " right-8")}>
            <p className='text-base text-gray-600'>{title}</p>
            <p className='text-xl'>Find local camps led by experts,<br /> in almost every sport.</p>
            <div className='pt-8'><LinkBlack darkMode={true} text={btn} link="/"/></div>
        </div>
        
    </div>
)
const image =(url: string) => (
    <div className='col-span-6'>
        <img className='w-full' src={url}/>
    </div>
)

const PlayBookKid = ({sideLeft,btn,title,url}: DataPlayBook) => {
    console.log('Lew lew');
    return (
        <div className='grid grid-cols-12 gap-2 relative'>
            {sideLeft === true ?(
                <>
                    {content(sideLeft,btn,title)}
                    {image(url)}
                </>
            ) : (
                <>
                    {image(url)}
                    {content(sideLeft,btn,title)}
                </>
            )}
            
        </div>
    );
}

export default PlayBookKid;