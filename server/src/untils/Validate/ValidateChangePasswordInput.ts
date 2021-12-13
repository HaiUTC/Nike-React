import { ChangePasswordInput } from "../../types/User/ChangePasswordInput";

export const ValidateChangePasswordInput = (changePasswordInput : ChangePasswordInput) => {
    if(changePasswordInput.newPassword.length <=5)
        return {
            message : 'Invalid Password',
            errors : [
                {
                    field : 'Invalid Password',
                    message : 'Password must be greater than 5 character'
                }
            ]
        }

    if(changePasswordInput.newPassword === changePasswordInput.currentPassword)
        return {
            message : 'Invalid New Password',
            errors : [
                {
                    field : 'newPassword',
                    message : 'New Password must not match Current Password'
                }
            ]
        } 
    return null
}