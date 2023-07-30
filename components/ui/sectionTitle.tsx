import React from 'react'



interface SectionTitleProps {
    children: string
    h?: 1 | 2 | 3 | 4 | 5 | 6
}

const SectionTitle = ({ children, h = 1 }: SectionTitleProps) => {

    if (h === 2) {
        return (
            <h2 className={"text-2xl"}>{children}</h2>
        )
    }
    if (h === 3) {
        return (
            <h3 className={"text-xl"}>{children}</h3>
        )
    }
    if (h === 4) {
        return (
            <h4 className={"text-lg"}>{children}</h4>
        )
    }
    if (h === 5) {
        return (
            <h5 className={"font-bold"}>{children}</h5>
        )
    }
    if (h === 6) {
        return (
            <h6 className={"font-semibold"}>{children}</h6>
        )
    }
        return (
            <h1 className={"text-3xl"}>{children}</h1>
        )
}

SectionTitle.displayName = "SectionTitle"


export default SectionTitle;
