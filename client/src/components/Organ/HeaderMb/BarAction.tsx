import { useState } from "react"
import Bar from "../../Atom/Header/Bar"
import LoginModal from "../../Templete/Modal/LoginModal"
import BarListDrawer from "./BarListDrawer"

const BarAction = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [show,setShow] = useState(false)
    const onOpen = () => setShow(true)
    const onClose = () => setShow(false)
    const onOpenLogin = () => {onClose();setShowLogin(true)}
    const handleClose = () => {setShowLogin(false);};
    return (
        <div>
            <Bar onOpen={onOpen}/>
            <BarListDrawer open={show} onClose={onClose} onOpenLogin={onOpenLogin}/>
            {showLogin && <LoginModal handleClose={handleClose}/>}
        </div>
    )
}
export default BarAction