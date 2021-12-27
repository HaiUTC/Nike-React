import { Drawer } from '@mui/material';
import HeaderBarList from '../../Molec/HeaderMb/HeaderBarList';

const BarListDrawer = ({open,onClose,onOpenLogin}: IBarList) => {
    
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <HeaderBarList onOpenLogin={onOpenLogin}/>
        </Drawer>
    )
}
export default BarListDrawer

interface IBarList {
    open : boolean,
    onClose : () => void,
    onOpenLogin : () => void
}