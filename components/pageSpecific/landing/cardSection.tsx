import EventCard from '#/components/ui/cards/EventCard';
import landingPageData from '#/content/landingPage';
import React from 'react'



interface LandingCardSectionProps {

}

const LandingCardSection = (props: LandingCardSectionProps) => {
    return (
        <div className={"w-full h-full flex justify-center items-center"}>
            <div className={"max-w-screen max-w-[calc(100vw-4rem)] py-8 gap-4 flex flex-col justify-center items-center md:grid px-6 sm:px-12 md:px-6"} style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 1fr))"
            }}>
                {landingPageData.featured.map((j, i) => <EventCard container={"h-full w-full"} item={j} key={`featured-event-${i}`} />)}
            </div>
        </div>
    )
}


LandingCardSection.displayName = "LandingCardSection"


export default LandingCardSection;
