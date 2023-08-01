import React from 'react'



interface UnderNavbarWrapperProps {
    children: React.ReactNode
}

const UnderNavbarWrapper = ({ children }: UnderNavbarWrapperProps) => {
    return (
        <div className={"underNavbarWrapper"} style={{
            width: "100%",
            minHeight: "calc(100vh - 96px)"
        }}>{children}</div>
    )
}


UnderNavbarWrapper.displayName = "UnderNavbarWrapper"


export default UnderNavbarWrapper;
