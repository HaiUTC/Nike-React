import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

interface IInputFieldProps {
    name: string;
    label: string;
    id : string
    formik : any
  }
export const FormSelectAtom = ({formik,...props}: IInputFieldProps) =>{
    return (
        <TextField
          fullWidth
          {...props}
          select
          value={formik.values.gender}
          onChange={formik.handleChange}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
        >
          <MenuItem value='Male'>Male</MenuItem>
          <MenuItem value='Female'>Female</MenuItem>
        </TextField>
    )
}