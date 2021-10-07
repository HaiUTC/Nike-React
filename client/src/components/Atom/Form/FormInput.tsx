import TextField from '@material-ui/core/TextField'

interface IInputFieldProps {
    name: string
    id: string
    label: string
    type?: string
    value : any
    error : any
    helperText : any
    formik : any
  }
export const FormInputAtom = ({formik,...props}: IInputFieldProps) => {
    return (
        <TextField fullWidth {...props} onChange={formik.handleChange}/>
    )
} 