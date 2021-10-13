import { ReactNode } from "react";

interface IWrapperProps {
    children : ReactNode
}

const Wrapper = ({children} : IWrapperProps) => {
    return (
        <div className='mx-2 md:mx-4 lg:mx-10'>
            {children}
        </div>
    )
}

export default Wrapper