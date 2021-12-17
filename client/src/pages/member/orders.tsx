import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { UserContext } from '../../libs/UserContext'
import TabMain from '../../components/Atom/Member/Order/TabMain'
const Layout = dynamic(() => import("../../components/Templete/Layout/Layout"))
const LoadingElement = dynamic(() => import('../../components/Atom/Loading/LoadingElement'))
const HeaderMemberPage = dynamic(() => import("../../components/Atom/Member/HeaderMemberPage"))


const orders = (props) =>{
    const {user} =useContext(UserContext)
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/icons/logo.svg" type = "image/x-icon"></link>
                <title>Nike.com Member Orders</title>
            </Head>
            <Layout>
                {user[0] ? (
                    <>
                        <HeaderMemberPage />
                        <TabMain />
                    </>
                ) : <LoadingElement />}
                
            </Layout>
        </>
    );
}

export default orders;