

const NewsElement = ({data}) => {
    return (
        <div className='px-2 pb-20'>
            <div>
                <img className='w-full object-center object-cover' style={{height : "320px"}} src={data.url}/>
            </div>
            <div className='pt-4'>
                <p className='text-sm text-gray-600'>{data.type}</p>
                <p className='text-xl py-1'>{data.title}</p>
                {data.content && <p className='text-sm'>{data.content}</p>}
                
            </div>
        </div>
    );
}

export default NewsElement;