import { RegisterInput } from "../../types/User/RegisterInput";

export const ValidateRegisterInput = (registerInput : RegisterInput) => {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if(!regexEmail.test(registerInput.email))
        return {
            message : 'Invalid Email',
            errors : [
                {
                    field : 'Email',
                    message : 'Email invalidate'
                }
            ]
        }

    if(registerInput.firstName.length <= 2)
        return {
            message : 'Invalid First Name',
            errors : [
                {
                    field : 'First Name',
                    message : 'First Name must have greater than 2 character'
                }
            ]
        }


    if(registerInput.lastName.length <= 2)
        return {
            message : 'Invalid Last Name',
            errors : [
                {
                    field : 'Last Name',
                    message : 'Last Name must have greater than 2 character'
                }
            ]
        }

    if(registerInput.password.length <=5)
        return {
            message : 'Invalid Password',
            errors : [
                {
                    field : 'Password',
                    message : 'Password must have greater than 5 characters'
                }
            ]
        }    
    
    return null
}
    
