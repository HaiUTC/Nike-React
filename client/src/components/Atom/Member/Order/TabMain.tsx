import Box from '@mui/material/Box';
import {useState} from 'react'
import { useGetOrdersQuery } from '../../../../generated/graphql';
import LoadingElement from '../../Loading/LoadingElement';
import TabHeader from './TabHeader';
import TabContent from './TabContent';


const TabMain = () =>{
    const [value, setValue] = useState(0);
    const {data,loading,refetch } = useGetOrdersQuery({
        variables : {
            stateId : value
        },
        fetchPolicy: "network-only"
    })
    const handleChange = ( _event: React.FormEvent<HTMLInputElement>,newValue) => { 
        setValue(newValue);
        refetch()
    };

    return (
        <Box sx={{ width: '100%' }} mt={6}>
            <TabHeader value={value} handleChange={handleChange}/>
            <div>
                {loading ? <LoadingElement /> : <TabContent data={data}/>}
            </div>
        </Box>

    );
}

export default TabMain;