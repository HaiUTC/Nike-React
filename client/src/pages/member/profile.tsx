import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { UserContext } from '../../libs/UserContext'
const MemberBenefits = dynamic(() => import('../../components/Atom/Member/MemberBenefits'))
const DownLoad = dynamic(() => import('../../components/Atom/Member/DownLoad'))
const LoadingPage = dynamic(() => import('../../components/Atom/Loading/LoadingPage'))
const HeaderMemberPage = dynamic(() => import("../../components/Atom/Member/HeaderMemberPage"))
const AvatarMember = dynamic(() => import("../../components/Atom/Member/AvatarMember"))
const Layout = dynamic(() => import("../../components/Templete/Layout/Layout"))
const profile = ({download,memberBenefits }) => {
    const {user} =useContext(UserContext)
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="/css/Header.css"/>
                <link rel="stylesheet" href="/css/main.css"/>
                <link rel = "icon" href ="http://localhost:3000/static/icons/logo.svg" type = "image/x-icon"></link>
                <title>Nike.com Member Profile</title>
            </Head>
            <Layout>
                {user[0] ? (
                    <>
                        <HeaderMemberPage />
                        <AvatarMember user={user}/>
                        <MemberBenefits data={memberBenefits} title="Member Benefits"/>
                        <DownLoad data={download} title="Nike Apps"/> 
                    </>
                ) : <LoadingPage />}
                
            </Layout>
        </>
    );
}
export const getStaticProps = async () => {
    const url = `${process.env.URL_FETCH_DATA}/member/profile.json`
    const response = await fetch(url)
    const data = await response.json()
    return {
      props : {
        download : data.dowload,
        memberBenefits : data.memberBenefits
      }
    }
  };

export default profile;