import { TextField } from "@mui/material"
import { forwardRef } from "react"
import { Controller } from "react-hook-form"
import FormInputProps from './FormInputProps'

const FromInputText = forwardRef(({name, control, label,focus} : FormInputProps,ref) => {
    return (
        <Controller name={name} control={control} render={({
            field : {onChange, value},
            fieldState : {error},
        }) => (
            <TextField 
                autoFocus={focus}
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={label}
                variant="outlined"
            />
        )} />

    )
})
export default FromInputText