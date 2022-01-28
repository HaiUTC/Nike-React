import { Checkbox } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FormikHelpers, useFormik } from 'formik';
import {  useState } from 'react';
import * as yup from 'yup';
import { CreateAddressInput } from '../../../generated/graphql';
import { FormInputAtom } from '../Form/FormInput';

const validationSchema = yup.object({
  province: yup.string().required('Password is required'),
  distric: yup.string().required('Password is required'),
  commune: yup.string().required('Password is required'),
  phoneNumber: yup.string().required('Password is required'),
  detail: yup.string().required('Password is required'),
})
const DiffLocation = ({onSubmitCheckOut}) => {
  const [isSaveAddress, setSaveAddress] = useState(false)
  const initialValues:CreateAddressInput = {province : "", distric : "", commune : "", detail : "", phoneNumber : ""}
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values : CreateAddressInput, { setErrors }: FormikHelpers<CreateAddressInput>) => {
      const allValues = {
        address : values,
        save : isSaveAddress
      }
      onSubmitCheckOut(allValues);
  }});
    return (
        <div>
        <div className="pt-6">
          <span className="text-xl">
            Enter a location which you want to delivery it.
          </span>
        </div>
        <form onSubmit={formik.handleSubmit} className='pt-4'>
          <FormInputAtom
              focus="true" 
              formik={formik} 
              value={formik.values.province} 
              error={formik.touched.province && Boolean(formik.errors.province)}
              helperText={formik.touched.province && formik.errors.province}
              label="Province" 
              id="province" 
              name='province'
          />
          <FormInputAtom 
              formik={formik} 
              value={formik.values.distric} 
              error={formik.touched.distric && Boolean(formik.errors.distric)}
              helperText={formik.touched.distric && formik.errors.distric}
              label="Distric" 
              id="distric" 
              name='distric'
          />
          <FormInputAtom 
              formik={formik} 
              value={formik.values.commune} 
              error={formik.touched.commune && Boolean(formik.errors.commune)}
              helperText={formik.touched.commune && formik.errors.commune}
              label="Commune" 
              id="commune" 
              name='commune'
          />
          <FormInputAtom 
              formik={formik} 
              value={formik.values.phoneNumber} 
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              label="Phone Number" 
              id="phoneNumber" 
              name='phoneNumber'
          />
          <FormInputAtom
            formik={formik} 
            value={formik.values.detail} 
            error={formik.touched.detail && Boolean(formik.errors.detail)}
            helperText={formik.touched.detail && formik.errors.detail}
            multiline
            rows={6}
            placeholder="Detail..." 
            id="outlined-multiline-static"
            name='detail'
        />
        <div>
        <Checkbox sx={{color: grey[900],'&.Mui-checked': {color: grey[900],},} } onChange={() => setSaveAddress(!isSaveAddress)}/> Save to my address
        </div>
        
          <div className="mt-8 " >
            <button type='submit' className='w-full py-4 rounded-full bg-black text-base text-white'>Member Checkout</button>
          </div>
        </form>
       
      </div>
    )
}
export default DiffLocation