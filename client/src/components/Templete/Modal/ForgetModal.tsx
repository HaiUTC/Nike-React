import { Alert, Dialog, DialogContent, DialogTitle, Snackbar } from "@mui/material";
import { useFormik } from "formik"
import Image from 'next/image'
import * as yup from 'yup';
import { ForgotPasswordInput, useForgotPasswordMutation } from "../../../generated/graphql";
import ButtonSubmit from "../../Atom/Button";
import { FormInputAtom } from "../../Atom/Form/FormInput";
const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
})
const ForgetModal = ({handleClose}) => {
    const [forgotPassword,{loading}] = useForgotPasswordMutation()
    const initialValues:ForgotPasswordInput = {email : ""}
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values: ForgotPasswordInput) => {
            await forgotPassword({ variables : { forgotPasswordInput : values} })
        }
    })
    return (
        <Dialog open={true} maxWidth="xs" onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
        <div className="flex flex-col items-center">
            <div><Image src='/img/logo.svg' width="60px" height="60px"/></div>
            <div className="text-2xl pt-2 pb-6 font-bold tracking-tighter">RESET PASSWORD</div>
            <p className="text-sm text-gray-500 text-center">Enter your email to receive instructions on how to reset your password.</p>
          </div>
        </DialogTitle>
        <DialogContent>
            <form onSubmit={formik.handleSubmit}>
                <FormInputAtom 
                    formik={formik} 
                    value={formik.values.email} 
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email" 
                    id="email" 
                    name='email'/>
            <ButtonSubmit loading={false} type="submit" />
            </form>
        </DialogContent>
        </Dialog>
    )
}
export default ForgetModal