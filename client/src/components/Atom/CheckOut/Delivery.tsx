import { useState } from "react"
import DiffLocation from "./DiffLocation"
import MyLocation from "./MyLocation"

const Delivery = ({onSubmitCheckOut,address,loading}) => {
    const [location, setLocation] = useState({
        id : null,
        address : null
      });
      const activeThisLocation = (item) => {setLocation({
        id : item.id || null,
        address : item || null
      });};
    const [haveLocation, setHaveLocation] = useState(null)
    const myLocation = () => {
        setHaveLocation('myLocation')
    }
    const difLocation = () => {
        setHaveLocation('difLocation')
    }
    return (
        <div className='px-20'>
            <div>
                <span className='text-2xl'>Where would you like to delivery your order?</span>
            </div>
            <div className='grid grid-cols-2 gap-2 py-3'>
                <div className={haveLocation === 'myLocation' ? 'col-span-1 flex border-2 rounded-md border-black cursor-pointer':'col-span-1 flex border-2 rounded-md cursor-pointer' } onClick={myLocation}><p className='p-3 m-auto text-sm'>My Location, Bae</p></div>
                <div className={haveLocation === 'difLocation' ? 'col-span-1 flex border-2 rounded-md border-black cursor-pointer':'col-span-1 flex border-2 rounded-md cursor-pointer' } onClick={difLocation}><p className='p-3 m-auto text-sm'>No, Different Location</p></div>
            </div>
            {haveLocation === 'myLocation' ? (
                <div>
                    <MyLocation address={address} location={location} activeThisLocation={activeThisLocation} loading={loading} onSubmitCheckOut={onSubmitCheckOut}/>
                </div>
            ) : null}
            {haveLocation === 'difLocation' ? (
                <div>
                    <DiffLocation onSubmitCheckOut={onSubmitCheckOut}/>
                </div>
            ) : null}
            
        </div>
    )
}

export default Delivery