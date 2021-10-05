import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
const SubmitButton = styled(LoadingButton)({
    boxShadow: 'none',
    fontSize: 14,
    padding: '6px 12px',
    margin: "14px",
    border: 'none',
    fontWeight: 'normal',
    letterSpacing : 1.5,
    backgroundColor: '#000',
    color : '#fff',
    '&:hover': {
        backgroundColor: '#000',
        color : '#fff',
        boxShadow: 'none',
      },
})
const ButtonSubmit = ({loading,handleClick}) => {
    return (
        <SubmitButton color="secondary" loading={loading} variant="outlined" onClick={handleClick}>SUBMIT</SubmitButton>
    )
}
export default ButtonSubmit 