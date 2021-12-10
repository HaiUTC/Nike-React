

const MemberBenefitsItem = ({data}) => {
    return (
        <div className='px-2 pb-20'>
            <div>
                <img className='w-full object-center object-cover' style={{height : "320px"}} src={data.img}/>
            </div>
            <div className='pt-4'>
                <p className='text-xl py-1'>{data.title}</p>
                
                
            </div>
        </div>
    );
}

export default MemberBenefitsItem;