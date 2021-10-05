import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import FormInputProps from './FormInputProps'

const FormInputDate = forwardRef(({ name, control, label }: FormInputProps,ref) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field :{value, onChange}}) => (
          <DatePicker
          
          label={label}
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
    </LocalizationProvider>
  )
})
export default FormInputDate