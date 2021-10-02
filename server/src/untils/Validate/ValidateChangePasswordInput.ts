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
    return null
}