import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from 'next/image'
import { useForm } from "react-hook-form";
import FromInputText from '../Atom/Form/FormInputText'
import FormInputDate from "../Atom/Form/FormInputDate";
import { FormInputSelect } from "../Atom/Form/FormInputSelect";
import ButtonSubmit from "../Atom/Button";
interface IFormInput {
  firstName : string
  lastName : string
  email : string
  password : string
  dob : Date
  gender : string
}
const defaultValues = {
  firstName : "",
  lastName : "",
  email : "",
  password : "",
  dob : null,
  gender : ""
}
const RegisterModal = ({handleClose}) =>{
    const methods = useForm<IFormInput>({defaultValues})
    const { handleSubmit, control,register,formState:{errors} } = methods
    const onSubmit = data => console.log(data)
    
    const handleCloseModal = () => {handleClose()};
    return (
        <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <div className="flex flex-col items-center">
            <div>
              <Image src='/img/logo.svg' width="60px" height="60px"/>
            </div>
            <div className="text-2xl font-bold tracking-tighter">YOUR ACCOUNT FOR EVERYTHING NIKE</div>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className='pt-4'>
            <FromInputText name='firstName' control={control} label="First Name" focus={true} {...register("firstName", { required: true, maxLength: 20 })}/>
            {errors.firstName && <span className='text-red-500 text-xs'>First name is required</span>}
          </div>
          <div className='pt-4'>
            <FromInputText name='lastName' control={control} label="Last Name" {...register("lastName", { required: true, maxLength: 20 })}/>
            {errors.lastName && <span className='text-red-500 text-xs'>Last name is required</span>}
          </div>
          <div className='pt-4'>
            <FromInputText name='email' control={control} label="Email" {...register("email", { required: true, pattern : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}/>
            {errors.email && <span className='text-red-500 text-xs'>Email is required</span>}
          </div>
          <div className='pt-4'>
            <FromInputText name='password' control={control} label="Password" {...register("password", { required: true,maxLength: 20 })}/>
            {errors.password && <span className='text-red-500 text-xs'>Password is required</span>}
          </div>
          <div className='pt-4'>
            <FormInputDate name='dob' control={control} label="Date of Birth" {...register("dob", { required: true})}/>
            {errors.dob && <span className='text-red-500 text-xs'>Date of Birth is required</span>}
          </div>
          <div className='pt-4'>
            <FormInputSelect name='gender' control={control} label="Gender" {...register("gender", { required: true})}/>
            {errors.gender && <span className='text-red-500 text-xs'>Gender is required</span>}
          </div>
          <div className='grid grid-cols-2 gap-4 text-xs pt-4'>
              <div className="col-span-1 text-left">
                <input type="checkbox" className="kl-checkbox" />
                <span className="pl-2 text-gray-500">Keep me signed in</span>
              </div>
              <div className="col-span-1 text-right">
                <span className="text-gray-500 cursor-pointer">Fogotten your password?</span>
              </div>
            </div>
            <div className="pt-6 text-xs">
              By logging in, you agrre to Nike's <a href="/" className='text-black underline'>Privacy Policy</a> and <a href="/" className='text-black underline'>Terms of Use</a>
            </div>
        </DialogContent>
          <ButtonSubmit loading={false} handleClick={handleSubmit(onSubmit)}/>
      </Dialog>
    );
}

export default RegisterModal;