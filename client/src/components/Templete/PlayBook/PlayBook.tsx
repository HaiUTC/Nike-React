import PlayBookKid from "../../Atom/Another/PlayBookKid";

const PlayBook = ({data}: IDataType) =>{
    return (
        <div>
            {data.map((item, index) => 
                <div key={index} className='py-10'>
                    <PlayBookKid sideLeft={item.sideLeft} btn={item.btn} title={item.title} url={item.url}/>
                </div>
            )}
            
        </div>
    );
}

export default PlayBook;

interface DataPlayBook {
    sideLeft : boolean,
    btn : string,
    title : string,
    url : string
}
interface IDataType {
    data : [DataPlayBook]
}