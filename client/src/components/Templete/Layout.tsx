import { ReactNode } from "react"
import Wrapper from "../Organ/Wrapper"
import UserHeader from '../Templete/Header'
interface ILayoutProps {
    children : ReactNode
}
const Layout = ({children} : ILayoutProps) => {
    return (
        <>
            <UserHeader />
            <Wrapper>{children}</Wrapper>

        </>
    )
}
export default Layout