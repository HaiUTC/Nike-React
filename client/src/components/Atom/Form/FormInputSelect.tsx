import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from "react-hook-form";
import FormInputProps from './FormInputProps'
import { forwardRef } from 'react';

const options = [{label: "Male",value: "Male",},{label: "Female",value: "Female",},];

export const FormInputSelect: React.FC<FormInputProps> =  forwardRef(({name,control,label},ref) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )
    })
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select 
            labelId="demo-simple-select-label"
            id="demo-simple-select" 
            onChange={onChange} 
            value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
})