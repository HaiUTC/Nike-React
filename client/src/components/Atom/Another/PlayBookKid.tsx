import LinkBlack from "../Button/LinkBlack";

const content= (data) => (
    <div className='col-span-6'>
        <div className={"absolute bottom-12" + (data.sideLeft ? " left-8" : " right-8")}>
            <p className='text-base text-gray-600'>{data.title}</p>
            <p className='text-xl'>Find local camps led by experts,<br /> in almost every sport.</p>
            <div className='pt-8'><LinkBlack darkMode={true} text={data.btn} link="/"/></div>
        </div>
        
    </div>
)
const image =(url) => (
    <div className='col-span-6'>
        <img className='w-full' src={url}/>
    </div>
)

const PlayBookKid = ({data}) => {
    return (
        <div className='grid grid-cols-12 gap-2 relative'>
            {data.sideLeft === true ?(
                <>
                    {content(data)}
                    {image(data.url)}
                </>
            ) : (
                <>
                    {image(data.url)}
                    {content(data)}
                </>
            )}
            
        </div>
    );
}

export default PlayBookKid;