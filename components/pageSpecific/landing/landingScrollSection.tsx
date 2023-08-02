import React from 'react'



interface LandingScrollSectionProps {
    children: React.ReactNode
}

const LandingScrollSection = ({ children }: LandingScrollSectionProps) => {
    return (
        <section className={"landingScrollSection"}>{children}</section>
    )
}


LandingScrollSection.displayName = "LandingScrollSection"


export default LandingScrollSection;
