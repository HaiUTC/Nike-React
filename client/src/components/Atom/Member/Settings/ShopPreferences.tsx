import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { grey } from '@mui/material/colors';
import LinkBlack from '../../Button/LinkBlack';
const ShopPreferences = (props) =>{
    return (
        <div>
            <p className='text-2xl pb-6'>Shop Preferences</p>
            <div>
                <FormControl>
                    <InputLabel id="demo-simple-select-readonly-label">Shoe Size</InputLabel>
                    <Select
                    labelId="demo-simple-select-readonly-label"
                    id="demo-simple-select-readonly"
                    value="10"
                    label="Shoe Size"
                    >
                    <MenuItem value={10}>8</MenuItem>
                    <MenuItem value={20}>9</MenuItem>
                    <MenuItem value={30}>10</MenuItem>
                    </Select>
                    <FormHelperText>Provide your shoe size to have it preselected when you shop.</FormHelperText>
                </FormControl>
            </div>
            <div className='py-6'>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className='text-base text-black pb-4'>Gender</FormLabel>
                    <RadioGroup className='px-6' aria-label="gender" defaultValue="woman" name="radio-buttons-group">
                        <FormControlLabel value="men" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Men's" />
                        <FormControlLabel value="woman" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Woman's" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className='text-base text-black pb-4'>Unit of Measure</FormLabel>
                    <RadioGroup className='px-6' aria-label="unit" defaultValue="Imperial" name="radio-buttons-group">
                        <FormControlLabel value="Imperial" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Imperial" />
                        <FormControlLabel value="Metric" control={<Radio sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},}} />} label="Metric" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='flex justify-end pt-4'>
                <LinkBlack text="Save" link="/" darkMode={true}/>
            </div>
        </div>
    );
}

export default ShopPreferences;