import LinkBlack from "../Button/LinkBlack";


const DownLoadElement = ({data}) =>{
    return (
        <div className='px-2 pb-20'>
            <div>
                <img className='w-full object-center object-cover' style={{height : "320px"}} src={data.img}/>
            </div>
            <div className='pt-4'>
                <div className="flex items-center">
                    <img style={{width : "44px"}} src={data.icon}/>
                    <p className="pl-2 text-base">{data.name}</p>
                </div>
                <p className='text-base text-gray-600  pt-2 pb-8'>{data.content}</p>
                <LinkBlack text={data.button} link="/" darkMode={true}/>
                
            </div>
        </div>
    );
}

export default DownLoadElement;