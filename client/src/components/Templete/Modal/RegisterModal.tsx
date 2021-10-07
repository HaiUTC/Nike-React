import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import Image from 'next/image'
import ButtonSubmit from "../../Atom/Button";
import { useCheckAuth } from "../../../utils/useCheckAuth";
import { RegisterInput, useRegisterMutation } from "../../../generated/graphql";
import { FormInputAtom } from "../../Atom/Form/FormInput";
import { FormSelectAtom } from "../../Atom/Form/FormSelect";
import { useFormik } from 'formik';
import * as yup from 'yup';
interface IFormRegisterInput {
  firstName : string
  lastName : string
  email : string
  password : string
  confirmPassword: string
  dob : Date
  gender : string
}
const validationSchema = yup.object({
  firstName : yup.string().required('First Name is required'),
  lastName : yup.string().required('Last Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
  gender: yup.string().required('Gender is required'),
  confirmPassword : yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});
const RegisterModal = ({handleClose}) =>{

    const {data : authData,loading: authLoading} = useCheckAuth()
    const initialValues: IFormRegisterInput = {firstName : "", lastName : "", password : "",confirmPassword:"", email :"", gender : "",dob : null}
    const [registerUser, {loading : _registerUserLoading}] = useRegisterMutation()
    const handleCloseModal = () => {handleClose()};
    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values)
      },
    });
    
    
    return (
      <Dialog open={true} maxWidth="xs" scroll='body' onClose={handleCloseModal}>
        <DialogTitle id="alert-dialog-title">
        <div className="flex flex-col items-center">
            <div><Image src='/img/logo.svg' width="60px" height="60px"/></div>
            <div className="text-2xl pb-4 font-bold tracking-tighter">BECOME A NIKE MEMBER</div>
            <span className="text-sm text-gray-500 pb-4 text-center">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</span>
          </div>
        </DialogTitle>
        <DialogContent>
              <Stack>
              <form onSubmit={formik.handleSubmit}>
                  <FormInputAtom 
                    formik={formik}
                    value={formik.values.firstName} 
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    label="First Name" 
                    id="firstName" 
                    name='firstName'/>
                  <FormInputAtom 
                    formik={formik}
                    value={formik.values.lastName} 
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName} 
                    label="Last Name" 
                    id="lastName" 
                    name='lastName'/>
                  <FormSelectAtom formik={formik} label="Gender" id="gender" name='gender'/>
                  <FormInputAtom 
                    formik={formik} 
                    value={formik.values.email} 
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email" 
                    id="email" 
                    name='email'/>
                  <FormInputAtom 
                    formik={formik} 
                    value={formik.values.password} 
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password" 
                    id="password" 
                    name='password' 
                    type="password"/>
                  <FormInputAtom 
                    formik={formik} 
                    value={formik.values.confirmPassword} 
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    label="Confirm password" 
                    id="confirm" 
                    name='confirmPassword' 
                    type="confirmPassword"/>
                    
                  <div className="text-xs text-gray-500 py-2">
                    <span>Sign up for emails to get updates from Nike on products, offers and your Member benefits</span>
                  </div>
                  <div className="text-xs text-gray-500 pb-4">
                    By logging in, you agrre to Nike's <a href="/" className='text-black underline'>Privacy Policy</a> and <a href="/" className='text-black underline'>Terms of Use</a>
                  </div>
                  <ButtonSubmit loading={false} type="submit" />
              </form>
              </Stack>
              
        </DialogContent>
      </Dialog>
    );
}

export default RegisterModal;