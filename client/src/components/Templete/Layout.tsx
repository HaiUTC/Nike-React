import { ReactNode } from "react"
import HeaderFormSearch from "../Molec/Header/HeaderFormSearch"
import Wrapper from "../Organ/Wrapper"
import UserHeader from '../Templete/Header'
interface ILayoutProps {
    children : ReactNode
}
const Layout = ({children} : ILayoutProps) => {
    return (
        <>
            <HeaderFormSearch />
            <UserHeader />
            <Wrapper>{children}</Wrapper>

        </>
    )
}
export default Layout