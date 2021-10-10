import { Drawer, makeStyles } from '@mui/material';
import HeaderBarList from '../../Molec/HeaderMb/HeaderBarList';

const BarListDrawer = ({open,onClose,onOpenLogin}) => {
    
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <HeaderBarList onOpenLogin={onOpenLogin}/>
        </Drawer>
    )
}
export default BarListDrawer