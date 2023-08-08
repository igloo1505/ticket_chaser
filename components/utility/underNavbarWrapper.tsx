import clsx from 'clsx'
import React from 'react'



interface UnderNavbarWrapperProps {
    children: React.ReactNode
    center?: boolean
}

const UnderNavbarWrapper = ({ children, center }: UnderNavbarWrapperProps) => {
    return (
        <div className={clsx("underNavbarWrapper h-screenNav mt-[--navbar-height]", center && "flex flex-col justify-center items-center")} style={{
            width: "100%",
            /* minHeight: "calc(100vh - var(--navbar-height))", */
        }}>{children}</div>
    )
}


UnderNavbarWrapper.displayName = "UnderNavbarWrapper"


export default UnderNavbarWrapper;
