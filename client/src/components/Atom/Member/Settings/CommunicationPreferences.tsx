import CheckBox from "../../Button/CheckBox";
import LinkBlack from "../../Button/LinkBlack";


const CommunicationPreferences = (props) =>{
    return (
        <div>   
            <p className='text-2xl pb-6'>Communication Preferences</p>
            <p className='text-base pb-2'>General Communication</p>
            <p className='text-base pb-6'>Stay up to speed on the newest Nike products, styles and technology.</p>
            <div className="pb-10">
                <CheckBox title="Receive Emails"/> 
            </div>
            <div className='flex justify-end'>
                <LinkBlack text="Save" link="/" darkMode={true}/>
            </div>
        </div>
    );
}

export default CommunicationPreferences;