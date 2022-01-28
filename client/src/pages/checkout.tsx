import dynamic from 'next/dynamic';
import Head from "next/head";
import { useCallback, useState } from 'react';
import SuccessOrNotCheckOut from '../components/Templete/Modal/SuccessOrNotCheckOut';
import { AddressCheckOut, CheckOutInput, ProductCheckOut, useCheckOutMutation, useGetAllAddressQuery } from '../generated/graphql';
import { useAppSelector } from '../redux/hook';
const Delivery = dynamic(()=> import("../components/Atom/CheckOut/Delivery"))
const SummaryCheckout = dynamic(()=> import("../components/Atom/CheckOut/SummaryCheckout"))
const Layout = dynamic(()=> import("../components/Templete/Layout/Layout"))

const CheckOut = () => {
  const {data, loading} = useGetAllAddressQuery()
  const {price, listProduct} = useAppSelector(state => state.checkout)
  const [checkout] = useCheckOutMutation()
  const [isSussessOrNot, setSuccessOrNot] = useState(null)


  const handleCheckOut = useCallback( async (values) => {
    let listPro : ProductCheckOut[] = []
    let addressCheckOut : AddressCheckOut = null
    listProduct.map(pro => {
      listPro.push({
        productId : pro.product.id,
        color : pro.color,
        size : pro.size,
        quantity : pro.quantity
      })
    })
    if( typeof values === 'object'){
      addressCheckOut.province = values.address.province
      addressCheckOut.distric = values.address.distric
      addressCheckOut.commune = values.address.commune
      addressCheckOut.detail = values.address.detail
      addressCheckOut.phoneNumber = values.address.phoneNumber
      addressCheckOut.save = values.save
    }
    const checkOutProduct : CheckOutInput = {
      product : listPro,
      total : price+29,
      address : addressCheckOut,
      addressId : typeof values === 'object' ? null : +values
    }
    console.log(checkOutProduct)
    const response = await checkout({
      variables : {checkOutInput : checkOutProduct}
    })
    if(response.data.CheckOut.success){
      setSuccessOrNot(true)
    }
    else{
      setSuccessOrNot(false)
    }
  },[])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="/css/Header.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="icon" href="https://nike-react.vercel.app/static/image/logo.png" type="image/x-icon"></link>
        <title>Member Checkout</title>
      </Head>
      <Layout>
        <div className="flex justify-center py-20">
          <div className="px-4 w-2/4">
            <Delivery address={data?.GetAllAddress.allAddress} loading={loading} onSubmitCheckOut={handleCheckOut} />
          </div>
          <div className="w-1/3">
            <SummaryCheckout listProduct={listProduct}  price={price} />
          </div>
        </div>
        {isSussessOrNot ? isSussessOrNot  ? 
          <SuccessOrNotCheckOut 
            image="/static/image/success.png" 
            isBtn={true} text='Checkout Successfully' 
            textBtn='Go back to Cart' 
            link='/cart'/> : 
          <SuccessOrNotCheckOut 
            image="/static/image/failure.png" 
            isBtn={true} text='Checkout Failure. Please try again' 
            textBtn='Go back to Cart' 
            link='/cart'/> : null}
      </Layout>
    </>
  );
};

export default CheckOut;
