import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from 'next/image'
import * as yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import { FormInputAtom } from "../../Atom/Form/FormInput";
import ButtonSubmit from "../../Atom/Button/Button";
import { LoginInput, MyProfileDocument, MyProfileQuery, useLoginMutation } from "../../../generated/graphql";
import { useState } from "react";
import RegisterModal from './RegisterModal'
import ForgetModal from "./ForgetModal";
import { initializeApollo } from "../../../libs/apolloClient";
import useWindowSize from "../../../utils/useWindowSize";


const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().required('Password is required'),
})
const LoginModal = ({handleClose}: ILogin) => {
    const [openRegister, setOpenRegister] = useState(false)
    const [openForgot, setOpenForgot] = useState(false)
    const size = useWindowSize()


    const [loginUser, {loading : _loginUserLoading}] = useLoginMutation()
    const initialValues:LoginInput = {email : "", password : ""}
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values : LoginInput, { setErrors }: FormikHelpers<LoginInput>) => {
          const response = await loginUser({
            variables :    {
                loginInput : values
            },
            update(cache,{data}){
                if(data?.Login.success){
                    cache.writeQuery<MyProfileQuery>({
                        query : MyProfileDocument,
                        data : {MyProfile : data.Login.user}
                    })
                }
            },
          })
          if(response?.data?.Login?.errors){
              setErrors({email : response.data.Login.message})
          }
          else if(response.data?.Login.user){
            handleClose()
            const apolloClient = initializeApollo()
            apolloClient.resetStore()
          }
        },
      });
      const openRegisterModal = () => {setOpenRegister(true)}
      const openForgotPasswordModal = () => {setOpenForgot(true)}
      const handleCloseRegisterModal = () => {setOpenRegister(false);};
      const handleCloseForgotModal = () => {setOpenForgot(false);};
    return (
        <>
        <Dialog open={true} fullScreen={size.width<=620} maxWidth="xs" scroll='body' onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
        <div className="flex flex-col items-center relative">
            <div><Image src='/static/icons/logo.svg' width="60px" height="60px"/></div>
            <div className="text-2xl font-bold tracking-tighter text-center">YOUR ACCOUNT FOR EVERYTHING NIKE</div>
          </div>
        </DialogTitle>
        <DialogContent>
            <form onSubmit={formik.handleSubmit}>
                <FormInputAtom
                    focus="true" 
                    formik={formik} 
                    value={formik.values.email} 
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email" 
                    id="email" 
                    name='email'
                />
                <FormInputAtom 
                    formik={formik} 
                    value={formik.values.password} 
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password" 
                    id="password" 
                    name='password' 
                    type="password"
                />
                <div className='grid grid-cols-2 gap-4 text-xs pt-6'>
                    <div className="col-span-1 text-left">
                        <input type="checkbox" className="kl-checkbox" />
                        <span className="pl-2 text-gray-500">Keep me signed in</span>
                    </div>
                    <div className="col-span-1 text-right">
                        <span className="text-gray-500 cursor-pointer" onClick={openForgotPasswordModal}>Fogotten your password?</span>
                    </div>
                </div>
                <div className="pt-6 text-xs text-gray-500 text-center">
                    By logging in, you agrre to Nike's <a href="/" className='text-black underline'>Privacy Policy</a> and <a href="/" className='text-black underline'>Terms of Use</a>
                </div>
                <ButtonSubmit loading={_loginUserLoading} type="submit" />
            </form>
            <div className="text-xs text-gray-500 text-center">Not a member? <span className='cursor-pointer underline text-black' onClick={openRegisterModal}>Join Us</span></div>
            <div className="absolute top-4 right-8 cursor-pointer" onClick={handleClose}>
                <img className="p-2 rounded-full bg-gray-100" src='/static/icons/exit2.svg'/>
            </div>
        </DialogContent>
        </Dialog>
        {openRegister && <RegisterModal handleClose={handleCloseRegisterModal}/>}
        {openForgot && <ForgetModal handleClose={handleCloseForgotModal}/>}
        </>
    )
}

export default LoginModal

interface ILogin{
    handleClose : () => void
}