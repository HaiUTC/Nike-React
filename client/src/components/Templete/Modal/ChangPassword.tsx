import { Dialog, DialogContent } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import Image from 'next/image'
import * as yup from 'yup';
import { ChangePasswordInput, useChangePasswordMutation } from "../../../generated/graphql";
import { FormInputAtom } from "../../Atom/Form/FormInput";

const validationSchema = yup.object({
    currentPassword: yup.string().min(6, 'Current password should be of minimum 6 characters length').required('Current Password is required'),
    newPassword: yup.string().min(6, 'New password should be of minimum 6 characters length').required('New password is required'),
    confirmNewPassword : yup.string().required('Confirm password is required.').oneOf([yup.ref('newPassword'), null], 'Passwords must match')
  });
const ChangPassword = ({handleClose,handleShow}: IChangePassword) =>{
    const initialValues: ChangePasswordInput = {currentPassword : "", newPassword : "", confirmNewPassword : ""}
    const [changePassword] = useChangePasswordMutation()
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values : ChangePasswordInput, { setErrors }: FormikHelpers<ChangePasswordInput>) => {
          const response = await changePassword({
            variables : {
              changePasswordInput : values
            }
          })
          if(response.data.ChangePassword.errors){
            setErrors({currentPassword : response.data.ChangePassword.message})
          }
          else{
            handleShow()
            handleClose()
          }
        },
      });
    return (
        <Dialog open={true} scroll={'paper'} maxWidth="sm"  onClose={handleClose}>
            <DialogContent>
                <div className="py-8 px-10 relative" >
                    <p className="text-2xl pb-6">Edit Password</p>
                   
                    <form onSubmit={formik.handleSubmit}>
                        <FormInputAtom 
                            focus="true"
                            formik={formik} 
                            value={formik.values.currentPassword} 
                            error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
                            helperText={formik.touched.currentPassword && formik.errors.currentPassword}
                            label="Current Password*" 
                            id="currentPassword" 
                            name='currentPassword' 
                            type="password"/>

                        <FormInputAtom 
                            formik={formik} 
                            value={formik.values.newPassword} 
                            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                            helperText={formik.touched.newPassword && formik.errors.newPassword}
                            label="New Password*" 
                            id="newPassword" 
                            name='newPassword' 
                            type="password"/>

                        <FormInputAtom 
                            formik={formik} 
                            value={formik.values.confirmNewPassword} 
                            error={formik.touched.confirmNewPassword && Boolean(formik.errors.confirmNewPassword)}
                            helperText={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
                            label="Confirm New Password" 
                            id="confirmNewPassword" 
                            name='confirmNewPassword' 
                            type="password"/>

                        <div>
                            <div className="flex py-1">
                                <Image src='/static/icons/notex.svg' height="24px" width="24px"/>
                                <p className="pl-2 text-gray-500">Password requirements:</p>
                            </div>
                            <div className="flex py-1">
                                <Image src='/static/icons/notex.svg' height="24px" width="24px"/>
                                <p className="pl-2 text-gray-500">Minimum of 8 characters</p>
                            </div>
                            <div className="flex py-1">
                                <Image src='/static/icons/notex.svg' height="24px" width="24px"/>
                                <p className="pl-2 text-gray-500">Uppercase, lowercase letters, and one number</p>
                            </div>
                        </div>
                    
                    <div className="flex items-center justify-end pt-8">
                        <button className="px-8 py-2 border-2 rounded-full bg-black text-white" type="submit">Save</button>
                    </div>
                    </form>
                   
                    <div className="absolute top-4 right-8 cursor-pointer" onClick={handleClose}>
                        <img className="p-2 rounded-full bg-gray-100" src='/static/icons/exit2.svg'/>
                    </div>
                </div>
                
            </DialogContent>
        </Dialog>
    );
}

export default ChangPassword;

interface IChangePassword {
    handleClose : () => void,
    handleShow : () => void
}