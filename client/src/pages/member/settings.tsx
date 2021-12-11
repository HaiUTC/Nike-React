import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useContext, useState } from 'react'
import { Box, Drawer } from '@mui/material'
import { UserContext } from '../../libs/UserContext'
import useWindowSize from '../../utils/useWindowSize'
const ShopPreferences = dynamic(() => import('../../components/Atom/Member/Settings/ShopPreferences'))
const LinkedAccount = dynamic(() => import('../../components/Atom/Member/Settings/LinkedAccount'))
const ProfileVisiblity = dynamic(() => import('../../components/Atom/Member/Settings/ProfileVisiblity'))
const AccountDetails = dynamic(() => import('../../components/Atom/Member/Settings/AccountDetails'))
const LoadingElement = dynamic(() => import('../../components/Atom/Loading/LoadingElement'))
const Delivery = dynamic(() => import('../../components/Atom/Member/Settings/Delivery'))
const CommunicationPreferences = dynamic(() => import('../../components/Atom/Member/Settings/CommunicationPreferences'))
const Privacy = dynamic(() => import('../../components/Atom/Member/Settings/Privacy')) 
const Payment = dynamic(() => import('../../components/Atom/Member/Settings/Payment'))
const SettingNav = dynamic(() => import("../../components/Atom/Member/Settings/SettingNav"))
const Layout = dynamic(() => import("../../components/Templete/Layout/Layout"))


const settings = () => {
    const size = useWindowSize()
    const {user} =useContext(UserContext)
    const [eleActive, setEleActive] = useState('account-detail')
    const [anchor, setAnchor] = useState(false)
    const changeEleActive = (value) => {
        setEleActive(value)
        setAnchor(true)
    }
    const onCloseAnchor = () => setAnchor(false)
    let element
    switch(eleActive) {
        case 'payment-methods' : 
            element =  <Payment />
            break
        case 'delivery-addresses' :
            element = <Delivery />
            break
        case 'communication-preferences' :
            element = <CommunicationPreferences />
            break
        case 'privacy' :
            element = <Privacy />
            break
        case 'shop-preferences' :
            element = <ShopPreferences />
            break
        case 'linked-accounts' :
            element = <LinkedAccount />
            break
        case 'profile-visibility' :
            element = <ProfileVisiblity data={user[0]?.MyProfile}/>
            break
        default : 
            element = <AccountDetails data={user[0]?.MyProfile}/>
            break
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/icons/logo.svg" type = "image/x-icon"></link>
                <title>Nike.com Account Settings</title>
            </Head>
            <Layout>
                {user[0] ? (
                    <div className='pb-72 pt-16 px-4 lg:px-24'>
                        <div className="py-6 text-2xl"><span>Settings</span></div>
                        <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12 lg:col-span-4">
                                    <SettingNav data={eleActive} changeEleActive={changeEleActive}/>
                                </div>
                                <div className="hidden lg:block lg:col-span-8 max-w-md">
                                    {element}
                                    
                                </div>
                        </div>
                        {size.width <= 1025 && 
                        <div className='block lg:hidden'>
                            <Drawer anchor="right" open={anchor} onClose={null}>
                                <Box sx={{ width: "100vw" }} role="presentation">
                                    <div className='px-6 py-4'>
                                        <div className='flex py-4 cursor-pointer' onClick={onCloseAnchor}>
                                            <Image src='/static/icons/prev.svg' height="20px" width="20px"/>
                                            <p className='pl-2'>Back</p>
                                        </div>
                                        {element}
                                    </div>
                                </Box>
                            </Drawer>
                        </div>
                        }
                    </div>
                ) : <LoadingElement />}
                
            </Layout>
        </>

    );
}

export default settings;