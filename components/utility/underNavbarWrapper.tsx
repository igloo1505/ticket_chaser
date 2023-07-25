import React from 'react'



interface UnderNavbarWrapperProps {
    children: React.ReactNode
}

const UnderNavbarWrapper = ({children}: UnderNavbarWrapperProps) => {
return (
    <div className={"flex flex-col justify-center items-center"} style={{
            width: "100%",
            minHeight: "calc(100vh - 96px)"
        }}>{children}</div>
)
}


UnderNavbarWrapper.displayName = "UnderNavbarWrapper"


export default UnderNavbarWrapper;
