import React from 'react'



interface LandingScrollSectionProps {
    children: React.ReactNode
    section: number
}

const LandingScrollSection = ({ children, section }: LandingScrollSectionProps) => {
    return (
        <section id={`landing-scroll-section-${section}`} className={"landingScrollSection bg-base-100 min-h-screen"}>{children}</section>
    )
}


LandingScrollSection.displayName = "LandingScrollSection"


export default LandingScrollSection;
