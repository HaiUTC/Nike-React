import { ReactNode } from "react";

interface IWrapperProps {
    children : ReactNode
}

const Wrapper = ({children} : IWrapperProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Wrapper