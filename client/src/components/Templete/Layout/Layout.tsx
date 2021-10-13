import { ReactNode } from "react"
import { useMyProfileQuery } from "../../../generated/graphql"
import HeaderAnnounce from "../../Molec/Header/HeaderAnnounce"
import HeaderFormSearch from "../../Molec/Header/HeaderFormSearch"
import HeaderFormSearchMb from "../../Molec/HeaderMb/HeaderFormSearchMb"
import Wrapper from "../../Organ/Wrapper/Wrapper"
import Footer from "./Footer"
import Header from './Header'
import HeaderMb from "./HeaderMb"
import Head from 'next/head'
interface ILayoutProps {
    children : ReactNode
}
const Layout = ({children} : ILayoutProps) => {
    const {data,loading} = useMyProfileQuery()
    return (
        <>
        <Head>
            <link rel="stylesheet" href="/css/Header.css"/>
        </Head>
        <>
            {/* Header */}
            <HeaderFormSearch />
            <HeaderFormSearchMb />
            <Header data={data} loading={loading}/>
            <HeaderMb />
            <HeaderAnnounce />

            {/* Children */}
            <Wrapper>{children}</Wrapper>

            {/* Footer */}
            <Footer />
        </>
        </>
    )
}
export default Layout