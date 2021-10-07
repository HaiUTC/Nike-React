import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
const SubmitButton = styled(LoadingButton)({
    boxShadow: 'none',
    fontSize: 14,
    padding: '6px 12px',
    margin: "20px 0",
    width: "100%",
    fontWeight: 'normal',
    letterSpacing : 1.5,
    backgroundColor: '#000',
    color : '#fff',
    '&:hover': {
        backgroundColor: '#000',
        color : '#fff',
      },
})
const ButtonSubmit = ({loading,type}) => {
    return (
        <SubmitButton color="secondary" type={type} loading={loading} variant="outlined">SUBMIT</SubmitButton>
    )
}
export default ButtonSubmit 