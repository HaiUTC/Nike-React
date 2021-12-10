import PlayBookKid from "../../Atom/Another/PlayBookKid";


const PlayBook = ({data}) =>{
    return (
        <div>
            {data.map((item, index) => 
                <div key={index} className='py-10'>
                    <PlayBookKid data={item}/>
                </div>
            )}
            
        </div>
    );
}

export default PlayBook;