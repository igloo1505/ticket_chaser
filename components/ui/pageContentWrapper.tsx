import React from 'react'
import Footer from './Footer'
import clsx from 'clsx'



interface PageContentWrapperProps {
    children: React.ReactNode
    removePadding?: boolean
    center?: boolean
}

const PageContentWrapper = ({ children, removePadding, center }: PageContentWrapperProps) => {
    return (
        <div className={clsx("min-h-screen grid grid-rows-[1fr_var(--footer-height)]", center && "place-items-center")}>
            <div className={clsx("min-h-[calc(100vh-var(--footer-height))] h-fit relative", !removePadding && "pt-[--navbar-height]")}>{children}</div>
            <Footer />
        </div>
    )
}


PageContentWrapper.displayName = "PageContentWrapper"


export default PageContentWrapper;
