import LinkBlack from '../../Atom/Button/LinkBlack'
const Main = ({data}) => {
    return (
        <div>
            <div className={"pb-4 text-2xl " + (data?.collectionTitle?"mt-10" : "")}><span>{data?.collectionTitle}</span></div>
            <figure className='relative px-2'>
                {/* picture*/}
                <div className='w-full h-auto'>
                    <picture>
                        <source media="(min-width:600px)" srcSet={data.pic1} />
                        <img src={data.pic2} alt='Nike just do it'/>
                    </picture>
                </div>
                {/* caption*/}
                <figcaption>
                    <div className='w-full flex flex-col justify-center'>
                        <h4 className='text-5xl font-sans font-black tracking-tighter pt-8 pb-2 sm:text-center sm:text-6xl'>{data.title}</h4>
                        <p className='sm:text-center'>{data.content}</p>
                        <div className='sm:text-center py-8'>
                            {data.textBtn && 
                                <>
                                    {Array.isArray(data.textBtn) ? (
                                        <div className='flex justify-center'>
                                        {data.textBtn.map((item,index) => 
                                            <div className='px-2' key={index}><LinkBlack darkMode={data.darkMode} text={item} link={data.link}/></div>
                                        )}
                                        </div>
                                    ) : <LinkBlack darkMode={data.darkMode} text={data.textBtn} link={data.link}/>}
                                </>
                            }
                            
                        </div>
                    </div>
                </figcaption>
                {/* a-tag*/}
                <a href="/" className='absolute h-full w-full top-0'/>
            </figure>
        </div>

    )
}
export default Main